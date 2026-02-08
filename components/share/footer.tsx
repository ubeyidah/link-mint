import Wrapper from "@/components/share/wrapper";
import { Github, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#features" },
  { name: "Pricing", href: "/#pricing" },
];

const legalLinks = [
  { name: "Terms of Service", href: "/terms" },
  { name: "Privacy Policy", href: "/privecy" },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/ubeyidah/link-mint",
    icon: <Github className="size-4" />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/ubeyidah",
    icon: <Twitter className="size-4" />,
  },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-transparent via-primary/[0.03] to-primary/[0.06]">
      <Wrapper className="py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2"
              aria-label="Go to homepage"
            >
              <Image
                src="/logo.svg"
                alt="linkMint logo"
                width={32}
                height={32}
              />
              <span className="text-lg font-bold tracking-tight">
                LinkMint
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Shorten, share, and track your links with ease. The modern link
              management platform for everyone.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-2 pt-1">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="rounded-lg border border-border/60 p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} LinkMint. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built by{" "}
            <a
              href="https://ubeyidah.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:underline underline-offset-2"
            >
              ubeyidah
            </a>
          </p>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
