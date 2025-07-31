"use client";
import { Separator } from "@/components/ui/separator";
import React from "react";
import GoogleButton from "./google-btn";

const SignInForm = () => {
  return (
    <form>
      <div>
        <div className="relative w-full block mb-6">
          <Separator />
          <span className="absolute left-1/2 -translate-1/2 bg-card px-2">
            Or
          </span>
        </div>
        <GoogleButton />
      </div>
    </form>
  );
};

export default SignInForm;
