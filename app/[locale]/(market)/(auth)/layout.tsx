import { RootLayoutProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const layout = ({ children }: RootLayoutProps) => {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="w-full max-w-md px-6 py-12 flex flex-col items-center gap-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          aria-label="Go to homepage"
        >
          <Image src="/logo.svg" alt="linkMint logo" width={40} height={40} />
        
        </Link>

        {/* Form content */}
        {children}

        {/* Legal */}
        <p className="text-xs text-center text-muted-foreground leading-relaxed">
          By continuing you agree to our{" "}
          <Link
            href="/terms"
            className="underline underline-offset-2 hover:text-foreground"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privecy"
            className="underline underline-offset-2 hover:text-foreground"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </main>
  );
};

export default layout;
