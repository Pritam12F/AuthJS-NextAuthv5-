"use server";

import { signupSchema, loginSchema } from "@/validation";
import { z } from "zod";

export const signup = async (
  values: z.infer<typeof signupSchema | typeof loginSchema>
) => {
  const { success } = signupSchema.safeParse(values);

  return {
    message: "Successfully signed up!",
  };
};
