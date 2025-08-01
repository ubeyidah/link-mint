import Wrapper from "@/components/share/wrapper";
import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";
const navItems = [
  { name: "Home", href: "/" },
  { name: "features", href: "/#features" },
  { name: "Pricing", href: "/#pricing" },
];
const Footer = () => {
  return (
    <Wrapper
      as="footer"
      className="border-t border-primary/20 flex items-center justify-between pt-3 pb-8"
    >
      <p className="text-sm text-muted-foreground">
        LinkMint © {new Date().getFullYear()}. All rights reserved.
      </p>

      <ul className="flex items-center justify-center gap-3">
        {navItems.map((item) => (
          <li key={item.name} className="text-muted-foreground text-sm">
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <a
        href="https://github.com/ubeyidah/link-mint"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-primary/80 transition-colors rounded-full p-2 bg-muted hover:bg-secondary"
      >
        <Github className="size-5" />
      </a>
    </Wrapper>
  );
};

export default Footer;
