"use client";

import React, { useState } from "react";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowDown,
  ArrowUp,
  BarChart3,
  Chrome,
  Clock,
  Globe,
  Laptop,
  MapPin,
  Monitor,
  MousePointerClick,
  Smartphone,
  Tablet,
  TrendingUp,
  Users,
} from "lucide-react";

const overviewStats = [
  { label: "Total Clicks", value: "1,247", change: "+12.5%", up: true },
  { label: "Unique Visitors", value: "892", change: "+8.2%", up: true },
  { label: "Avg. Click Rate", value: "4.3%", change: "-0.2%", up: false },
  { label: "Top Link Clicks", value: "456", change: "+23.1%", up: true },
];

const dailyClicks = [
  { day: "Mon", clicks: 63, prev: 52 },
  { day: "Tue", clicks: 94, prev: 78 },
  { day: "Wed", clicks: 81, prev: 92 },
  { day: "Thu", clicks: 126, prev: 88 },
  { day: "Fri", clicks: 112, prev: 95 },
  { day: "Sat", clicks: 158, prev: 120 },
  { day: "Sun", clicks: 137, prev: 105 },
];

const maxClicks = Math.max(...dailyClicks.map((d) => Math.max(d.clicks, d.prev)));

const countries = [
  { name: "United States", clicks: 432, percentage: 34.6 },
  { name: "United Kingdom", clicks: 187, percentage: 15.0 },
  { name: "Germany", clicks: 134, percentage: 10.7 },
  { name: "Canada", clicks: 98, percentage: 7.9 },
  { name: "France", clicks: 76, percentage: 6.1 },
  { name: "Ethiopia", clicks: 65, percentage: 5.2 },
  { name: "India", clicks: 54, percentage: 4.3 },
  { name: "Australia", clicks: 47, percentage: 3.8 },
  { name: "Japan", clicks: 38, percentage: 3.0 },
  { name: "Brazil", clicks: 32, percentage: 2.6 },
];

const cities = [
  { name: "New York", country: "US", clicks: 145 },
  { name: "London", country: "UK", clicks: 112 },
  { name: "Berlin", country: "DE", clicks: 87 },
  { name: "Toronto", country: "CA", clicks: 65 },
  { name: "Paris", country: "FR", clicks: 54 },
  { name: "Addis Ababa", country: "ET", clicks: 48 },
  { name: "Mumbai", country: "IN", clicks: 38 },
  { name: "Sydney", country: "AU", clicks: 31 },
];

const devices = [
  { name: "Desktop", icon: Monitor, percentage: 52, clicks: 649 },
  { name: "Mobile", icon: Smartphone, percentage: 38, clicks: 474 },
  { name: "Tablet", icon: Tablet, percentage: 10, clicks: 124 },
];

const browsers = [
  { name: "Chrome", percentage: 45, clicks: 561 },
  { name: "Safari", percentage: 28, clicks: 349 },
  { name: "Firefox", percentage: 14, clicks: 175 },
  { name: "Edge", percentage: 8, clicks: 100 },
  { name: "Other", percentage: 5, clicks: 62 },
];

const os = [
  { name: "Windows", percentage: 38, clicks: 474 },
  { name: "macOS", percentage: 27, clicks: 337 },
  { name: "iOS", percentage: 18, clicks: 224 },
  { name: "Android", percentage: 14, clicks: 175 },
  { name: "Linux", percentage: 3, clicks: 37 },
];

const referrers = [
  { source: "Direct", clicks: 412, percentage: 33.0 },
  { source: "Twitter / X", clicks: 234, percentage: 18.8 },
  { source: "Google", clicks: 187, percentage: 15.0 },
  { source: "Facebook", clicks: 143, percentage: 11.5 },
  { source: "LinkedIn", clicks: 98, percentage: 7.9 },
  { source: "Reddit", clicks: 67, percentage: 5.4 },
  { source: "Email", clicks: 56, percentage: 4.5 },
  { source: "Other", clicks: 50, percentage: 4.0 },
];

const topLinks = [
  { title: "Newsletter Signup", code: "nlsign", clicks: 456, change: "+18%" },
  { title: "Marketing Campaign Q1", code: "mktq1", clicks: 342, change: "+23%" },
  { title: "Product Launch Page", code: "launch", clicks: 189, change: "+31%" },
  { title: "Referral Program", code: "refer", clicks: 145, change: "+12%" },
  { title: "Blog Post - SEO Tips", code: "seotip", clicks: 97, change: "+5%" },
];

const hourlyData = [0, 2, 1, 0, 1, 3, 12, 25, 38, 44, 52, 48, 55, 42, 38, 45, 52, 48, 35, 28, 18, 12, 8, 3];

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState("7d");
  const [selectedLink, setSelectedLink] = useState("all");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">
            Track your link performance and visitor insights
          </p>
        </div>
        <div className="flex gap-2">
          <Select value={selectedLink} onValueChange={setSelectedLink}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Links" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Links</SelectItem>
              {topLinks.map((l) => (
                <SelectItem key={l.code} value={l.code}>
                  {l.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[140px]">
              <Clock className="size-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24h</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Overview stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {overviewStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <Badge
                  variant={stat.up ? "default" : "destructive"}
                  className="text-[10px]"
                >
                  {stat.up ? (
                    <ArrowUp className="size-3 mr-0.5" />
                  ) : (
                    <ArrowDown className="size-3 mr-0.5" />
                  )}
                  {stat.change}
                </Badge>
              </div>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Clicks over time chart */}
      <Card>
        <CardHeader>
          <CardTitle>Clicks Over Time</CardTitle>
          <CardDescription>
            Daily click comparison with previous period
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Bar chart */}
            <div className="flex items-end gap-2 h-48">
              {dailyClicks.map((d) => (
                <div
                  key={d.day}
                  className="flex-1 flex items-end gap-0.5 group"
                >
                  <div
                    className="flex-1 bg-muted rounded-t-sm transition-colors hover:bg-muted-foreground/20"
                    style={{ height: `${(d.prev / maxClicks) * 100}%` }}
                    title={`Previous: ${d.prev}`}
                  />
                  <div
                    className="flex-1 bg-primary rounded-t-sm transition-colors hover:bg-primary/80 relative"
                    style={{ height: `${(d.clicks / maxClicks) * 100}%` }}
                    title={`Current: ${d.clicks}`}
                  >
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {d.clicks}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-muted-foreground px-1">
              {dailyClicks.map((d) => (
                <span key={d.day}>{d.day}</span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="size-3 rounded bg-primary" />
                Current period
              </div>
              <div className="flex items-center gap-1.5">
                <div className="size-3 rounded bg-muted" />
                Previous period
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Hourly distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="size-4" />
              Hourly Distribution
            </CardTitle>
            <CardDescription>When your links get the most clicks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-[2px] h-32">
              {hourlyData.map((val, i) => {
                const maxH = Math.max(...hourlyData);
                return (
                  <div
                    key={i}
                    className="flex-1 bg-primary/30 rounded-t-[1px] hover:bg-primary/60 transition-colors group relative"
                    style={{ height: `${maxH > 0 ? (val / maxH) * 100 : 0}%`, minHeight: val > 0 ? '2px' : '0' }}
                  >
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] text-muted-foreground opacity-0 group-hover:opacity-100 whitespace-nowrap">
                      {val}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between text-[9px] text-muted-foreground mt-1">
              <span>12am</span>
              <span>6am</span>
              <span>12pm</span>
              <span>6pm</span>
              <span>12am</span>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Peak hour: <span className="text-foreground font-medium">12:00 PM</span> with 55 clicks
            </p>
          </CardContent>
        </Card>

        {/* Devices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Laptop className="size-4" />
              Devices
            </CardTitle>
            <CardDescription>Click distribution by device type</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {devices.map((device) => (
              <div key={device.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <device.icon className="size-4 text-muted-foreground" />
                    <span>{device.name}</span>
                  </div>
                  <span className="text-muted-foreground">
                    {device.clicks} ({device.percentage}%)
                  </span>
                </div>
                <div className="h-2 rounded-full bg-primary/10 overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${device.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Geographic data */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="size-4" />
              Top Locations
            </CardTitle>
            <CardDescription>Where your visitors come from</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="countries">
              <TabsList className="mb-4">
                <TabsTrigger value="countries">Countries</TabsTrigger>
                <TabsTrigger value="cities">Cities</TabsTrigger>
              </TabsList>
              <TabsContent value="countries">
                <div className="space-y-3">
                  {countries.slice(0, 8).map((c, i) => (
                    <div key={c.name} className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground w-4">
                        {i + 1}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">{c.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {c.clicks} ({c.percentage}%)
                          </span>
                        </div>
                        <div className="h-1.5 rounded-full bg-primary/10 overflow-hidden">
                          <div
                            className="h-full bg-primary/60 rounded-full"
                            style={{
                              width: `${(c.percentage / countries[0].percentage) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="cities">
                <div className="space-y-3">
                  {cities.map((c, i) => (
                    <div key={c.name} className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground w-4">
                        {i + 1}
                      </span>
                      <div className="flex-1 flex items-center justify-between">
                        <div>
                          <span className="text-sm">{c.name}</span>
                          <span className="text-xs text-muted-foreground ml-1">
                            ({c.country})
                          </span>
                        </div>
                        <span className="text-sm font-medium">
                          {c.clicks}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Referrers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="size-4" />
              Referrers
            </CardTitle>
            <CardDescription>Traffic sources for your links</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {referrers.map((ref, i) => (
                <div key={ref.source} className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground w-4">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">{ref.source}</span>
                      <span className="text-xs text-muted-foreground">
                        {ref.clicks} ({ref.percentage}%)
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-primary/10 overflow-hidden">
                      <div
                        className="h-full bg-primary/40 rounded-full"
                        style={{
                          width: `${(ref.percentage / referrers[0].percentage) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Browsers */}
        <Card>
          <CardHeader>
            <CardTitle>Browsers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {browsers.map((b) => (
                <div key={b.name} className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">{b.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {b.percentage}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-primary/10 overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${b.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* OS */}
        <Card>
          <CardHeader>
            <CardTitle>Operating Systems</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {os.map((o) => (
                <div key={o.name} className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">{o.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {o.percentage}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-primary/10 overflow-hidden">
                      <div
                        className="h-full bg-primary/70 rounded-full"
                        style={{ width: `${o.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top performing links table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="size-4" />
            Top Performing Links
          </CardTitle>
          <CardDescription>Links with the most clicks in selected period</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-6">#</TableHead>
                <TableHead>Link</TableHead>
                <TableHead>Short URL</TableHead>
                <TableHead>Clicks</TableHead>
                <TableHead>Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topLinks.map((link, i) => (
                <TableRow key={link.code}>
                  <TableCell className="pl-6 font-medium">{i + 1}</TableCell>
                  <TableCell className="font-medium">{link.title}</TableCell>
                  <TableCell>
                    <code className="text-xs text-primary font-mono">
                      /r/{link.code}
                    </code>
                  </TableCell>
                  <TableCell className="font-semibold">{link.clicks}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="text-xs">
                      <ArrowUp className="size-3 mr-0.5" />
                      {link.change}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
