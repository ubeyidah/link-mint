"use client";
import UserProfile from "@/components/share/user-profile";
import Wrapper from "@/components/share/wrapper";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "settings", href: "/settings" },
  { name: "Plan", href: "/plan" },
];
const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();

  return (
    <header className="border-b py-3">
      <Wrapper className="flex items-center justify-between">
        <div className="flex gap-3 items-end">
          <Link href="/" className="flex items-end" aria-label="Go to homepage">
            <Image src="/logo.svg" alt="linkMint logo" width={38} height={38} />
          </Link>
          <nav>
            <ul className="flex items-center justify-center gap-3">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="hover:bg-primary/25 px-3 rounded-md transition-colors duration-200 py-1"
                >
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          {session && (
            <UserProfile
              email={session.user.email}
              name={session.user.name}
              image={session.user.image || ""}
            />
          )}
        </div>
      </Wrapper>
    </header>
  );
};

export default Navbar;
