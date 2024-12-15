"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomText from "../ui/text";

const LoginSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

const RegisterSchema = LoginSchema.extend({
  username: z.string().min(2, "Username must be at least 2 characters."),
});

interface AuthFormProps {
  mode: "login" | "register";
  className?: string;
}

export function AuthForm({ mode }: AuthFormProps) {
  const schema = mode === "login" ? LoginSchema : RegisterSchema;

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      ...(mode === "register" ? { username: "" } : {}),
    },
  });

  function onSubmit(data: z.infer<typeof schema>) {
    console.log(mode === "login" ? "Login Data:" : "Register Data:", data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {mode === "register" && (
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    type="username"
                    placeholder="Enter your username"
                    className="focus-visible:ring-primary-orange text-primary-orange"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="focus-visible:ring-primary-orange text-primary-orange"
                  {...field}
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
                  type="password"
                  placeholder="Enter your password"
                  className="focus-visible:ring-primary-orange text-primary-orange"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <CustomText className="text-[0.8rem] text-neutral-500 dark:text-neutral-400">
          Forgot Password?
        </CustomText>
        <Button className="w-full bg-primary-orange" type="submit">
          {mode === "login" ? "Login" : "Register"}
        </Button>
        <CustomText
          className="text-[0.8rem] text-neutral-800 dark:text-neutral-400 flex justify-center gap-1"
          withSpan={true}
          spanClassName="text-primary-orange"
          additionalText=" Create an account"
        >
          Don’t have an Account?
        </CustomText>
      </form>
    </Form>
  );
}
