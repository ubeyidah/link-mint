"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Check,
  CreditCard,
  Crown,
  Download,
  Gem,
  Receipt,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Get started with basic link shortening",
    features: [
      "50 links per month",
      "Basic analytics",
      "Standard short links",
      "7-day link history",
      "Community support",
    ],
    limits: { links: 50, clicks: 1000, domains: 1 },
    current: false,
    popular: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "Perfect for growing businesses",
    features: [
      "500 links per month",
      "Advanced analytics",
      "Custom short codes",
      "Password protection",
      "Link expiration",
      "QR code generation",
      "UTM builder",
      "Priority support",
    ],
    limits: { links: 500, clicks: 50000, domains: 3 },
    current: true,
    popular: true,
  },
  {
    name: "Business",
    price: "$29",
    period: "/month",
    description: "For teams and enterprises",
    features: [
      "Unlimited links",
      "Real-time analytics",
      "Custom domains",
      "Team collaboration",
      "API access",
      "Bulk link creation",
      "Device targeting",
      "Branded QR codes",
      "Webhook integrations",
      "Dedicated support",
    ],
    limits: { links: -1, clicks: -1, domains: 10 },
    current: false,
    popular: false,
  },
];

const invoices = [
  {
    id: "INV-2026-002",
    date: "Feb 01, 2026",
    amount: "$9.00",
    status: "paid",
    plan: "Pro",
  },
  {
    id: "INV-2026-001",
    date: "Jan 01, 2026",
    amount: "$9.00",
    status: "paid",
    plan: "Pro",
  },
  {
    id: "INV-2025-012",
    date: "Dec 01, 2025",
    amount: "$9.00",
    status: "paid",
    plan: "Pro",
  },
  {
    id: "INV-2025-011",
    date: "Nov 01, 2025",
    amount: "$9.00",
    status: "paid",
    plan: "Pro",
  },
  {
    id: "INV-2025-010",
    date: "Oct 01, 2025",
    amount: "$0.00",
    status: "paid",
    plan: "Free",
  },
];

export default function BillingPage() {
  const [upgradeDialogOpen, setUpgradeDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Billing</h1>
        <p className="text-muted-foreground">
          Manage your subscription and billing details
        </p>
      </div>

      {/* Current plan overview */}
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Crown className="size-5 text-primary" />
              </div>
              <div>
                <CardTitle>Pro Plan</CardTitle>
                <CardDescription>
                  Your current active subscription
                </CardDescription>
              </div>
            </div>
            <Badge>Active</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Links Used</span>
                <span className="font-medium">23 / 500</span>
              </div>
              <Progress value={4.6} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Clicks Used</span>
                <span className="font-medium">1,247 / 50,000</span>
              </div>
              <Progress value={2.5} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Custom Domains</span>
                <span className="font-medium">1 / 3</span>
              </div>
              <Progress value={33} />
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between text-sm">
            <div className="text-muted-foreground">
              <p>
                Next billing date:{" "}
                <span className="text-foreground font-medium">
                  March 1, 2026
                </span>
              </p>
              <p>
                Payment method:{" "}
                <span className="text-foreground font-medium">
                  Visa ending in 4242
                </span>
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <CreditCard className="size-3" />
                Update Payment
              </Button>
              <Button variant="ghost" size="sm" className="text-destructive">
                Cancel Plan
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Plan pricing toggle */}
      <div className="flex items-center justify-center gap-3">
        <span
          className={`text-sm ${!isAnnual ? "font-medium" : "text-muted-foreground"}`}
        >
          Monthly
        </span>
        <button
          onClick={() => setIsAnnual(!isAnnual)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isAnnual ? "bg-primary" : "bg-input"}`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-background transition-transform ${isAnnual ? "translate-x-6" : "translate-x-1"}`}
          />
        </button>
        <span
          className={`text-sm ${isAnnual ? "font-medium" : "text-muted-foreground"}`}
        >
          Annual{" "}
          <Badge variant="secondary" className="text-[10px] ml-1">
            Save 20%
          </Badge>
        </span>
      </div>

      {/* Plans grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={
              plan.popular
                ? "border-primary/50 relative"
                : plan.current
                  ? "border-primary/20"
                  : ""
            }
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="gap-1">
                  <Star className="size-3" />
                  Most Popular
                </Badge>
              </div>
            )}
            <CardHeader className="text-center pt-8">
              <CardTitle className="text-lg">{plan.name}</CardTitle>
              <div className="mt-2">
                <span className="text-4xl font-bold">
                  {isAnnual
                    ? `$${Math.round(parseInt(plan.price.replace("$", "")) * 0.8)}`
                    : plan.price}
                </span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <CardDescription className="mt-2">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm"
                  >
                    <Check className="size-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {plan.current ? (
                <Button className="w-full" variant="outline" disabled>
                  Current Plan
                </Button>
              ) : (
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => {
                    setSelectedPlan(plan.name);
                    setUpgradeDialogOpen(true);
                  }}
                >
                  {plan.price === "$0" ? (
                    "Downgrade"
                  ) : (
                    <>
                      <Zap className="size-4" />
                      Upgrade
                    </>
                  )}
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Billing history */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Receipt className="size-4" />
                Billing History
              </CardTitle>
              <CardDescription>Your past invoices and payments</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Download className="size-3" />
              Export All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {invoices.map((invoice) => (
              <div
                key={invoice.id}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-md bg-muted flex items-center justify-center">
                    <Receipt className="size-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{invoice.id}</p>
                    <p className="text-xs text-muted-foreground">
                      {invoice.date} · {invoice.plan} Plan
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium">{invoice.amount}</span>
                  <Badge
                    variant="secondary"
                    className="text-[10px] capitalize"
                  >
                    {invoice.status}
                  </Badge>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Download className="size-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upgrade dialog */}
      <Dialog open={upgradeDialogOpen} onOpenChange={setUpgradeDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Gem className="size-5 text-primary" />
              Upgrade to {selectedPlan}
            </DialogTitle>
            <DialogDescription>
              You&apos;re about to upgrade your plan. The new pricing will take
              effect immediately and be prorated for the current billing period.
            </DialogDescription>
          </DialogHeader>
          <div className="rounded-lg bg-muted/50 p-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Current plan</span>
              <span>Pro - $9/mo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">New plan</span>
              <span className="font-medium text-primary">
                {selectedPlan} -{" "}
                {selectedPlan === "Business" ? "$29/mo" : "$0/mo"}
              </span>
            </div>
            <Separator />
            <div className="flex justify-between font-medium">
              <span>Due today (prorated)</span>
              <span>
                {selectedPlan === "Business" ? "$14.50" : "$0.00"}
              </span>
            </div>
          </div>
          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => setUpgradeDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setUpgradeDialogOpen(false)}>
              <Sparkles className="size-4" />
              Confirm Upgrade
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
