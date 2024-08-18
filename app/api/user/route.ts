import prisma from "@/db/src";
import { NextResponse } from "next/server";
import * as z from "zod";
import bcrypt from "bcryptjs";

const signupSchema = z
  .object({
    username: z.string().min(2, {
      message: "Username can't be empty",
    }),
    password: z
      .string()
      .min(1, {
        message: "Please enter password",
      })
      .min(8, {
        message: "Password too short",
      }),
    confirmPassword: z.string().min(1, {
      message: "Please enter password",
    }),
  })
  .refine((data: any) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match",
  });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const success = signupSchema.parse(body);

    if (!success) {
      return NextResponse.json(
        {
          msg: "wrong inputs",
        },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        username: success.username,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          msg: "username already taken",
        },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(success.password, 10);

    const newUser = await prisma.user.create({
      data: {
        username: success.username,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      msg: "user successfully signed up",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        msg: "internal server error",
      },
      { status: 500 }
    );
  }
}
