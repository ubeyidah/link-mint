"use client";
import Wrapper from "@/components/share/wrapper";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { ArrowRight, Link2, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Hero = () => {
  const { data: session } = authClient.useSession();
  const t = useTranslations("homePage");
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background layers */}
      <div
        className="absolute inset-0 -z-30"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Glow orbs */}
      <div className="pointer-events-none absolute -z-10">
        <div className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[80px]" />
      </div>

      <Wrapper
        as="section"
        className="flex h-screen flex-col items-center justify-center text-center"
      >
        {/* Pill badge */}
        <Badge className="mb-8 gap-1.5 rounded-full border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5" />
          LinkMint — URL Shortener
        </Badge>

        {/* Heading */}
        <h1 className="max-w-3xl font-sans text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {t("title")}
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
          {t("content")}
        </p>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={session ? "/dashboard" : "/sign-in"}
            className={buttonVariants({
              size: "lg",
              className: "gap-2 rounded-full px-8 text-sm font-semibold",
            })}
          >
            {session ? "Dashboard" : "Get Started"}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/#pricing"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "rounded-full px-8 text-sm font-semibold",
            })}
          >
            See Pricing
          </Link>
        </div>

        {/* Floating mini-graphic: mock link shortener bar */}
        <div className="mt-20 w-full max-w-lg">
          <div className="rounded-2xl border border-border/40 bg-card/60 p-1 shadow-2xl shadow-primary/5 backdrop-blur-xl">
            <div className="flex items-center gap-3 rounded-xl bg-background/80 px-5 py-3">
              <Link2 className="h-5 w-5 shrink-0 text-primary" />
              <span className="flex-1 truncate text-left text-sm text-muted-foreground">
                https://example.com/my-very-long-url-to-shorten
              </span>
              <span className="shrink-0 rounded-lg bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                Shorten
              </span>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Hero;
