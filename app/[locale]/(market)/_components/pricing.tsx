"use client";

import * as PricingCard from "@/components/pricing-card";
import Wrapper from "@/components/share/wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2, Coins, Gem, Sparkles } from "lucide-react";
import React from "react";

const plans = [
  {
    icon: <Sparkles />,
    name: "Free",
    price: "Br 0",
    description: "Perfect for getting started with a limited number of links.",
    features: [
      "5 free coins",
      "Basic dashboard",
      "Limited link expiration",
      "Modern UI",
    ],
    ctaText: "Get Started",
    ctaVariant: "outline" as const,
  },
  {
    icon: <Gem />,
    name: "Unlimited Monthly",
    badge: "Popular",
    price: "Br 100",
    period: "/ month",
    description: "Unlimited links for 30 days. Best for power users.",
    features: [
      "Unlimited links",
      "Full dashboard access",
      "Custom expiration settings",
      "Priority support",
      "Advanced analytics",
    ],
    ctaText: "Subscribe",
    ctaVariant: "default" as const,
  },
  {
    icon: <Coins />,
    name: "Pay As You Go",
    price: "Br 0.50",
    period: "/ coin",
    description:
      "Buy coins when you need them. Flexible and pay only for what you use.",
    features: [
      "Flexible credit purchase",
      "Full dashboard access",
      "No subscription lock-in",
      "Modern UI",
    ],
    ctaText: "Buy Coins",
    ctaVariant: "outline" as const,
  },
];

const PricingSection = () => {
  return (
    <Wrapper as="section" id="pricing" className="py-24 md:py-32">
      <div className="text-center mb-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
          Pricing
        </p>
        <h2 className="font-sans text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Plans that grow with you
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Choose the perfect plan for your needs. Start free and scale as you
          grow.
        </p>
      </div>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
        {plans.map((plan, index) => (
          <PricingCard.Card
            className={cn(
              "w-full max-w-full bg-transparent",
              index === 1 && "md:scale-105"
            )}
            key={plan.name}
          >
            <PricingCard.Header>
              <PricingCard.Plan>
                <PricingCard.PlanName>
                  {plan.icon}
                  <span className="text-muted-foreground">{plan.name}</span>
                </PricingCard.PlanName>
                {plan.badge && (
                  <PricingCard.Badge>{plan.badge}</PricingCard.Badge>
                )}
              </PricingCard.Plan>
              <PricingCard.Price>
                <PricingCard.MainPrice>{plan.price}</PricingCard.MainPrice>
                {plan.period && (
                  <PricingCard.Period>{plan.period}</PricingCard.Period>
                )}
              </PricingCard.Price>
              <Button
                className="w-full font-semibold"
                variant={plan.ctaVariant}
              >
                {plan.ctaText}
              </Button>
            </PricingCard.Header>

            <PricingCard.Body>
              <PricingCard.Description>
                {plan.description}
              </PricingCard.Description>
              <PricingCard.List>
                {plan.features.map((feature) => (
                  <PricingCard.ListItem className="text-xs" key={feature}>
                    <CheckCircle2
                      aria-hidden="true"
                      className="h-4 w-4 text-primary"
                    />
                    <span>{feature}</span>
                  </PricingCard.ListItem>
                ))}
              </PricingCard.List>
            </PricingCard.Body>
          </PricingCard.Card>
        ))}
      </div>
    </Wrapper>
  );
};

export default PricingSection;
