"use client";

import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginSchema, signupSchema } from "@/validation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { AlertDestructive } from "./alerts";
import { useState } from "react";

interface FormWrapperProps {
  typeofform: "Sign Up" | "Sign In";
}

export const FormWrapper = ({ typeofform }: FormWrapperProps) => {
  let formSchema: typeof loginSchema | typeof signupSchema;
  const [notMatch, setNotMatch] = useState<boolean>(false);

  if (typeofform === "Sign In") {
    formSchema = loginSchema;
  } else {
    formSchema = signupSchema;
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      confpass: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (typeofform === "Sign Up") {
      if (values.password != values.confpass) {
        setNotMatch(true);
      } else {
        setNotMatch(false);
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter email id" {...field} />
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
                <Input placeholder="******" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {typeofform == "Sign Up" ? (
          <FormField
            control={form.control}
            name="confpass"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <Input placeholder="******" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : null}
        <Button type="submit" className="w-full">
          {typeofform}
        </Button>
      </form>
      {notMatch ? (
        <AlertDestructive
          title={"Error"}
          description={"Passwords don't match"}
        />
      ) : null}
    </Form>
  );
};
