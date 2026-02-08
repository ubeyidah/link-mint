"use client";
import React, { useState } from "react";
import Wrapper from "./wrapper";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import UserProfile from "./user-profile";
import { authClient } from "@/lib/auth-client";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#features" },
  { name: "Pricing", href: "/#pricing" },
];

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-transparent backdrop-blur-2xl">
      <Wrapper className="flex items-center justify-between py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          aria-label="Go to homepage"
        >
          <Image src="/logo.svg" alt="linkMint logo" width={32} height={32} />
          <span className="text-lg font-bold tracking-tight">LinkMint</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="rounded-lg px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            {session ? (
              <UserProfile
                email={session.user.email}
                name={session.user.name}
                image={session.user.image || ""}
              />
            ) : (
              <Link
                href="/sign-in"
                className={buttonVariants({
                  size: "sm",
                  className: "rounded-full px-5 text-sm font-medium",
                })}
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </Wrapper>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/10 bg-background/95 backdrop-blur-xl md:hidden">
          <Wrapper className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-3 border-t border-border/20 pt-4">
              {session ? (
                <UserProfile
                  email={session.user.email}
                  name={session.user.name}
                  image={session.user.image || ""}
                />
              ) : (
                <Link
                  href="/sign-in"
                  onClick={() => setMobileOpen(false)}
                  className={buttonVariants({
                    className: "w-full rounded-full text-sm font-medium",
                  })}
                >
                  Sign In
                </Link>
              )}
            </div>
          </Wrapper>
        </div>
      )}
    </header>
  );
};

export default Navbar;
