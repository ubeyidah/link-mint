import Wrapper from "@/components/share/wrapper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import clsx from "clsx";
import { Check, Gem } from "lucide-react";
import React from "react";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaVariant: "default" | "outline";
  popular?: boolean;
}

interface PricingProps {
  plans?: PricingPlan[];
}

const defaultPlans: PricingPlan[] = [
  {
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
    ctaVariant: "outline",
  },
  {
    name: "Unlimited Monthly",
    price: "Br 100 / month",
    description: "Unlimited links for 30 days. Best for power users.",
    features: [
      "Unlimited links",
      "Full dashboard access",
      "Custom expiration settings",
      "Priority support",
      "Advanced analytics",
    ],
    ctaText: "Subscribe",
    ctaVariant: "default",
    popular: true,
  },
  {
    name: "Pay As You Go",
    price: "Br 0.50 / coin",
    description:
      "Buy coins when you need them. Flexible and pay only for what you use.",
    features: [
      "Flexible credit purchase",
      "Full dashboard access",
      "No subscription lock-in",
      "Modern UI",
    ],
    ctaText: "Buy Coins",
    ctaVariant: "outline",
  },
];

const PricingSection = () => {
  return (
    <Wrapper as="section" id="pricing" className="pb-20 pt-10">
      <h1 className="text-center py-4 text-3xl font-medium">
        Plans and Pricing
      </h1>
      <p className="text-center pb-10 text-secondary-foreground">
        Choose the perfect plan for your needs. Start free and scale as you
        grow.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {defaultPlans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </Wrapper>
  );
};

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  const isPopular = plan.popular || false;
  return (
    <div
      className={clsx({
        "border p-4 rounded-xl relative scale-95": true,
        "border-3 border-primary scale-105": isPopular,
      })}
    >
      {isPopular && (
        <span className="absolute -top-0.5 left-1/2 -translate-1/2 bg-primary text-white px-4 py-2 rounded-full text-xs">
          Popular
        </span>
      )}
      <div>
        <Gem className="text-primary mx-auto py-3 box-content" />
      </div>
      <h4 className="text-xs text-center">{plan.name}</h4>
      <p className="text-xl py-3 text-center">{plan.price}</p>
      <p className="text-muted-foreground text-center text-sm">
        {plan.description}
      </p>
      <Separator className="my-3" />
      <ul className="pl-3">
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className="text-sm mt-2 flex gap-2 items-center text-muted-foreground"
          >
            <Check className="text-primary size-3" /> <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button className="w-full mt-7" variant={plan.ctaVariant}>
        {plan.ctaText}
      </Button>
    </div>
  );
};

export default PricingSection;
