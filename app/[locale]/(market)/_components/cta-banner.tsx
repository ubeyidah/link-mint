"use client";

import Wrapper from "@/components/share/wrapper";
import { buttonVariants } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { ArrowRight, Link2, Zap } from "lucide-react";
import Link from "next/link";

const CtaBanner = () => {
  const { data: session } = authClient.useSession();

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 md:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[100px] sm:h-[500px] sm:w-[800px]" />
      </div>

      <Wrapper className="relative">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border/50 bg-card/60 p-1.5 shadow-2xl shadow-primary/5 backdrop-blur-xl sm:rounded-3xl">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/[0.06] to-transparent px-6 py-12 text-center sm:rounded-2xl sm:px-14 md:py-20">
            {/* Floating decorative elements */}
            <div className="pointer-events-none absolute -left-6 top-8 rotate-12 text-primary/10 hidden sm:block">
              <Link2 className="h-24 w-24" strokeWidth={1} />
            </div>
            <div className="pointer-events-none absolute -right-4 bottom-6 -rotate-12 text-primary/10 hidden sm:block">
              <Zap className="h-20 w-20" strokeWidth={1} />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                Ready to start?
              </p>
              <h2 className="font-sans text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                Your links deserve
                <br />
                <span className="text-primary">better than long URLs</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base md:text-lg">
                Join thousands of users who shorten, track, and share smarter.
                Start free — no credit card, no commitment.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10">
                <Link
                  href={session ? "/dashboard" : "/sign-up"}
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "gap-2 rounded-full px-6 text-sm font-semibold shadow-lg shadow-primary/25 sm:px-8",
                  })}
                >
                  {session ? "Go to Dashboard" : "Create Free Account"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-4 text-xs text-muted-foreground/70 sm:mt-5">
                5 free coins included · No strings attached
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default CtaBanner;
