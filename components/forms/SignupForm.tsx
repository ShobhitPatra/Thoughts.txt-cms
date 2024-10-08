"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const formSchema = z
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

const SignupForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      router.push("/signin");
    }
  }

  return (
    <div
      className="p-10 h-full w-full bg-slate-900 rounded-lg bg-clip-padding
       backdrop-filter backdrop-blur-3xl bg-opacity-10 
    "
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <label className="flex justify-center p-2">
            <span className="text-2xl font-semibold">Sign Up</span>
          </label>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="enter username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="enter password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="re-enter password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="pt-4">
            <Button type="submit" className="w-full ">
              Sign Up
            </Button>
          </div>
          <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
            or
          </div>
          <div className="pt-4">
            <Button type="submit" className="w-full ">
              Sign Up with Google
              <span className="px-1 ">
                <FcGoogle className="size-5" />
              </span>
            </Button>
          </div>
          <div className="pt-4">
            <Link
              href={"/signin"}
              className="hover:text-blue-300 hover:underline cursor-pointer"
            >
              Already have an account ?
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;
