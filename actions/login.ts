"use server";

import { loginSchema, signupSchema } from "@/validation";
import { z } from "zod";

export const login = async (
  values: z.infer<typeof loginSchema | typeof signupSchema>
) => {
  const { success } = loginSchema.safeParse(values);

  //   if (!success) {
  //     return false;
  //   }
  //   return true;
  return {
    error: "Some error occured",
  };
};
