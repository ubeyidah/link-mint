import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  BarChart3,
  Copy,
  ExternalLink,
  Link2,
  MousePointerClick,
  Plus,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    label: "Total Links",
    value: "23",
    change: "+3 this week",
    icon: Link2,
    trend: "up",
  },
  {
    label: "Total Clicks",
    value: "1,247",
    change: "+12.5%",
    icon: MousePointerClick,
    trend: "up",
  },
  {
    label: "Active Links",
    value: "19",
    change: "4 expired",
    icon: TrendingUp,
    trend: "neutral",
  },
  {
    label: "Unique Visitors",
    value: "892",
    change: "+8.2%",
    icon: Users,
    trend: "up",
  },
];

const recentLinks = [
  {
    id: "1",
    title: "Marketing Campaign Q1",
    shortCode: "mktq1",
    originalUrl: "https://example.com/campaigns/marketing-q1-2026-launch",
    clicks: 342,
    status: "active",
    createdAt: "2 hours ago",
  },
  {
    id: "2",
    title: "Product Launch Page",
    shortCode: "launch",
    originalUrl: "https://example.com/products/new-product-launch-2026",
    clicks: 189,
    status: "active",
    createdAt: "5 hours ago",
  },
  {
    id: "3",
    title: "Blog Post - SEO Tips",
    shortCode: "seotip",
    originalUrl: "https://blog.example.com/seo-tips-for-2026-complete-guide",
    clicks: 97,
    status: "active",
    createdAt: "1 day ago",
  },
  {
    id: "4",
    title: "Newsletter Signup",
    shortCode: "nlsign",
    originalUrl: "https://example.com/newsletter/signup-form-premium",
    clicks: 456,
    status: "expired",
    createdAt: "3 days ago",
  },
  {
    id: "5",
    title: "Social Media Bio",
    shortCode: "bio26",
    originalUrl: "https://example.com/about/team/social-links",
    clicks: 78,
    status: "active",
    createdAt: "5 days ago",
  },
];

const topPerforming = [
  { title: "Marketing Campaign Q1", clicks: 342, change: "+23%" },
  { title: "Newsletter Signup", clicks: 456, change: "+18%" },
  { title: "Product Launch Page", clicks: 189, change: "+31%" },
];

const page = () => {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your link performance
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/links/new">
            <Plus className="size-4" />
            Create Link
          </Link>
        </Button>
      </div>

      {/* Stats grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription className="text-sm font-medium">
                {stat.label}
              </CardDescription>
              <stat.icon className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent links */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Links</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/links">
                  View all <ArrowUpRight className="size-3 ml-1" />
                </Link>
              </Button>
            </div>
            <CardDescription>Your latest shortened links</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentLinks.map((link) => (
                <div
                  key={link.id}
                  className="flex items-center justify-between gap-4 rounded-lg border p-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-sm truncate">
                        {link.title}
                      </p>
                      <Badge
                        variant={
                          link.status === "active" ? "default" : "secondary"
                        }
                        className="text-[10px] shrink-0"
                      >
                        {link.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-primary font-mono truncate">
                        linkmint.app/r/{link.shortCode}
                      </span>
                      <button className="shrink-0 text-muted-foreground hover:text-foreground transition-colors">
                        <Copy className="size-3" />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">
                      {link.originalUrl}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-semibold">{link.clicks}</p>
                    <p className="text-xs text-muted-foreground">clicks</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top performing */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing</CardTitle>
            <CardDescription>Links with most clicks this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerforming.map((item, i) => (
                <div key={item.title} className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.clicks} clicks
                    </p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {item.change}
                  </Badge>
                </div>
              ))}
            </div>

            {/* Quick stats */}
            <div className="mt-6 pt-4 border-t space-y-3">
              <h4 className="text-sm font-medium">Click Activity (7 days)</h4>
              {/* Mini bar chart simulation */}
              <div className="flex items-end gap-1 h-16">
                {[35, 52, 45, 70, 62, 88, 76].map((val, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary/20 rounded-sm hover:bg-primary/40 transition-colors relative group"
                    style={{ height: `${val}%` }}
                  >
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      {Math.round(val * 1.8)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-muted-foreground">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
