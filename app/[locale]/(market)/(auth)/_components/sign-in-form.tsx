"use client";
import { Separator } from "@/components/ui/separator";
import React, { useState, useTransition } from "react";
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
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Loader, XIcon } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const SignInForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = ({ email, password }: SignInType) => {
    startTransition(async () => {
      await authClient.signIn.email(
        {
          email,
          password,
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
          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending ? <Loader className="animate-spin" /> : "Sign In"}
          </Button>
        </div>
        <div className="py-4">
          <div className="relative w-full block mb-6">
            <Separator />
            <span className="absolute left-1/2 -translate-1/2 bg-background px-2 text-xs text-muted-foreground">
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
