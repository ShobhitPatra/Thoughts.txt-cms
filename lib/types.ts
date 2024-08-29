import * as z from "zod";

export const SignupFormSchema = z
  .object({
    username: z.string().min(1, "This feild cannot be empty"),
    password: z.string().min(6, "Password too short"),
    confirmPassword: z.string().min(1, "This feild cannot be empty"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords does not match",
  });

export const SigninFormSchema = z.object({
  username: z.string().min(1, "This feild cannot be empty"),
  password: z.string().min(6, "Password too short"),
});

export const PostBlogFormSchema = z.object({
  title: z.string().min(1, "Title cannot be null"),
  description: z.string().min(1, "Description cannot be null"),
});
