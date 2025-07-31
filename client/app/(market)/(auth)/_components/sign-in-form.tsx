"use client";
import { Separator } from "@/components/ui/separator";
import React from "react";
import GoogleButton from "./google-btn";
import { useForm } from "react-hook-form";
import { signInSchema, SignInType } from "@/validation/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignInForm = () => {
  const form = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: SignInType) => {
    console.log("Form submitted with data:", data);
    // Handle sign-in logic here
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 pb-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
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
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full">Sign In</Button>
        </div>
        <div className="py-4">
          <div className="relative w-full block mb-6">
            <Separator />
            <span className="absolute left-1/2 -translate-1/2 bg-card px-2">
              Or
            </span>
          </div>
          <GoogleButton />
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;
