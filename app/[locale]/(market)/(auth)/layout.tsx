import { RootLayoutProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const layout = ({ children }: RootLayoutProps) => {
  return (
    <main className="h-screen flex items-center justify-center flex-col gap-2">
      <Link
        href="/"
        className="flex flex-col items-center gap-2 -mb-5 z-10"
        aria-label="Go to homepage"
      >
        <Image src="/logo.svg" alt="linkMint logo" width={48} height={48} />
      </Link>
      {children}
      <p className="text-xs text-center text-secondary-foreground mt-2">
        By clicking contnue. You agree to our <br />{" "}
        <Link href="/terms" className="hover:text-foreground hover:underline">
          {" "}
          Terms of Service
        </Link>{" "}
        and
        <Link href="/privecy" className="hover:text-foreground hover:underline">
          {" "}
          Privecy Policy
        </Link>
        .
      </p>
    </main>
  );
};

export default layout;
