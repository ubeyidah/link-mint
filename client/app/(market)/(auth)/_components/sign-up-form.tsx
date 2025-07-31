"use client";
import { Separator } from "@/components/ui/separator";
import React, { useState, useTransition } from "react";
import GoogleButton from "./google-btn";
import { useForm } from "react-hook-form";
import { signUpSchema, SignUpType } from "@/validation/auth.validation";
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
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader, XIcon } from "lucide-react";

const SignUpForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });
  const onSubmit = ({ email, name, password }: SignUpType) => {
    startTransition(async () => {
      await authClient.signUp.email(
        {
          email,
          password,
          name,
          callbackURL: "/dashboard",
        },
        {
          onRequest: () => {
            setError("");
          },
          onSuccess: () => {
            setError("");
            form.reset();
            router.push("/dashboard");
          },
          onError: (ctx) => {
            setError(ctx.error.message);
          },
        }
      );
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 pb-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          {error && (
            <Alert variant="soft">
              <XIcon />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Button className="w-full" disabled={isPending}>
            {isPending ? <Loader className="animate-spin" /> : "Sign Up"}
          </Button>
        </div>
        <div className="py-4">
          <div className="relative w-full block mb-6">
            <Separator />
            <span className="absolute left-1/2 -translate-1/2 bg-card px-2">
              Or
            </span>
          </div>
          <GoogleButton isPending={isPending} />
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
