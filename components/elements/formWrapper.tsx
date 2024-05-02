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
import { login } from "@/actions/login";
import { useState, useTransition } from "react";
import { signup } from "@/actions/signup";
import { AlertDefault, AlertDestructive } from "./alerts";

interface FormWrapperProps {
  typeofform: "Sign Up" | "Sign In";
}

export const FormWrapper = ({ typeofform }: FormWrapperProps) => {
  let formSchema: typeof loginSchema | typeof signupSchema;
  const [isPending, setTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

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
    setError("");
    setSuccess("");
    if (typeofform === "Sign In") {
      setTransition(() => {
        login(values)
          .then((res) => {
            setSuccess(res.message);
          })
          .catch((err) => {
            setError(err.error);
          });
      });
    } else {
      setTransition(() => {
        signup(values)
          .then((res) => {
            setSuccess(res.message);
          })
          .catch((err) => {
            setError(err.error);
          });
      });
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
                <Input
                  placeholder="Enter email id"
                  {...field}
                  disabled={isPending}
                />
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
                  placeholder="******"
                  {...field}
                  type="password"
                  disabled={isPending}
                />
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
                  <Input
                    placeholder="******"
                    {...field}
                    type="password"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : null}
        <AlertDestructive description={error} />
        <AlertDefault description={success} />
        <Button type="submit" className="w-full">
          {typeofform}
        </Button>
      </form>
    </Form>
  );
};
