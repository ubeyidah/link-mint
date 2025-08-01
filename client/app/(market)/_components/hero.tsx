"use client";
import Wrapper from "@/components/share/wrapper";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";

const Hero = () => {
  const { data: session } = authClient.useSession();
  return (
    <div className="min-h-screen w-full relative">
      <div
        className="absolute inset-0 -z-30"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
        }}
      />

      <Wrapper
        as="section"
        className="flex items-center justify-center flex-col h-screen text-center"
      >
        <Badge className="-rotate-6"> LinkMint - URL Shortener</Badge>
        <h1 className="text-5xl leading-tight mt-5 mb-4 max-w-2xl">
          Your Modern Solution for <span className="text-primary">Smarter</span>
          , <span className="text-primary">Faster</span> Link Sharing
        </h1>
        <h4 className="text-muted-foreground mb-8 max-w-2xl">
          Create short, powerful links in seconds. Manage, track, and grow;
          built for simplicity, speed, and control.
        </h4>
        <div className="flex gap-5">
          <Link
            href={session ? "/dashboard" : "/sign-in"}
            className={buttonVariants()}
          >
            {session ? "Dashboard" : "Get Started"}
          </Link>
          <Link
            href={"/#pricing"}
            className={buttonVariants({ variant: "outline" })}
          >
            See Pricing
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Hero;
