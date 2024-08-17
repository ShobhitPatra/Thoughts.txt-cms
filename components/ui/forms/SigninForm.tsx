"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username can't be empty",
  }),
  password: z
    .string()
    .min(1, {
      message: "please enter password",
    })
    .min(8, {
      message: "password too short",
    }),
});

const SigninForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div
      className="p-6 h-full w-full bg-slate-900 rounded-lg bg-clip-padding
       backdrop-filter backdrop-blur-3xl bg-opacity-10 
    "
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <label className="flex justify-center p-2">
            <span className="text-2xl font-semibold">Sign In</span>
          </label>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="username" {...field} />
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
          <div className="pt-4">
            <Button type="submit" className="w-full ">
              Sign In
            </Button>
          </div>
          <Separator />
          <div className="pt-4">
            <Button type="submit" className="w-full ">
              Sign in with Google
            </Button>
          </div>
          <div className="pt-4">
            <Link
              href={"/signup"}
              className="hover:text-blue-300 hover:underline cursor-pointer"
            >
              Don't have an account yet ?
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SigninForm;
