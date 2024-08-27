import prisma from "@/db/src";
import bcrypt from "bcryptjs";
import { NextAuthOptions, DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { JWT } from "next-auth/jwt";

interface User {
  id: string;
  name: string | null;
  email: string | null;
  username: string | null;
}

interface CustomJWT extends JWT {
  id?: string;
  username?: string | null;
}

interface CustomSession extends DefaultSession {
  user: {
    id: string;
    username: string | null;
  } & DefaultSession["user"];
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        (token as CustomJWT).id = user.id;
        (token as CustomJWT).username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      (session as CustomSession).user = {
        id: (token as CustomJWT).id ?? "",
        username: (token as CustomJWT).username ?? "",
      };
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      id: "Credentials",
      credentials: {
        username: { type: "username", label: "username" },
        password: { type: "password", label: "password" },
      },
      async authorize(credentials: any) {
        try {
          if (!credentials?.username || !credentials?.password) {
            return null;
          }

          const existingUser = await prisma.user.findUnique({
            where: {
              username: credentials?.username,
            },
          });

          if (!existingUser) {
            throw new Error("user not found");
          }

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            existingUser.password
          );

          if (!isPasswordCorrect) {
            throw new Error("Password wrong");
          }

          const user: User = {
            id: `${existingUser.id}`,
            name: existingUser.name,
            email: existingUser.email,
            username: existingUser.username,
          };

          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
};
