import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .email({ message: "Enter a valid email address" })
    .min(5, { message: "Username must be at least 5 characters long" })
    .max(50, { message: "Username cannot be longer than 50 characters" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(20, { message: "Password cannot be longer than 20 characters" }),
});

export const signupSchema = z
  .object({
    username: z
      .string()
      .email({ message: "Enter a valid email address" })
      .min(5, { message: "Username must be at least 5 characters long" })
      .max(50, { message: "Username cannot be longer than 50 characters" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .max(20, { message: "Password cannot be longer than 20 characters" }),
    confpass: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .max(20, { message: "Password cannot be longer than 20 characters" }),
  })
  .refine((val) => val.password === val.confpass, {
    message: "Passwords don't match",
    path: ["confpass"],
  });
