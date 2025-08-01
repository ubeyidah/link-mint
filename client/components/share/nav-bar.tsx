"use client";
import React from "react";
import Wrapper from "./wrapper";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import UserProfile from "./user-profile";
import { authClient } from "@/lib/auth-client";
const navItems = [
  { name: "Home", href: "/" },
  { name: "features", href: "/#features" },
  { name: "Pricing", href: "/#pricing" },
];
const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  return (
    <header className="bg-transparent backdrop-blur-2xl fixed left-0 right-0 top-0 z-50">
      <Wrapper className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-end" aria-label="Go to homepage">
          <Image src="/logo.svg" alt="linkMint logo" width={38} height={38} />
          <span className="ml-2 text-xl font-bold font-roboto">linkMint</span>
        </Link>

        <nav>
          <ul className="flex items-center justify-center gap-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:bg-primary/25 px-3 rounded-md transition-colors duration-200 py-1"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          {session ? (
            <UserProfile
              email={session.user.email}
              name={session.user.name}
              image={session.user.image || ""}
            />
          ) : (
            <Link
              href="/sign-in"
              className={buttonVariants({ variant: "default" })}
            >
              Sign In
            </Link>
          )}
        </div>
      </Wrapper>
    </header>
  );
};

export default Navbar;
