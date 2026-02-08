"use client";

import Wrapper from "@/components/share/wrapper";
import { buttonVariants } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CtaBanner = () => {
  const { data: session } = authClient.useSession();

  return (
    <section className="py-16 md:py-20">
      <Wrapper>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Ready to start?
          </p>
          <h2 className="font-sans text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Shorten your first link today
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            No credit card needed. Start with 5 free coins and see the
            difference.
          </p>
          <div className="mt-8">
            <Link
              href={session ? "/dashboard" : "/sign-up"}
              className={buttonVariants({
                size: "lg",
                className:
                  "gap-2 rounded-full px-8 text-sm font-semibold",
              })}
            >
              {session ? "Go to Dashboard" : "Get Started Free"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default CtaBanner;
