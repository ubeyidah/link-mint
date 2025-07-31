import Wrapper from "@/components/share/wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
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
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">
            See Pricing
          </Button>
        </div>
      </Wrapper>
    </div>
  );
};

export default Hero;
