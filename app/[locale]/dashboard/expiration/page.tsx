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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertTriangle,
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  Edit,
  RefreshCw,
  Shield,
  Timer,
  Trash2,
} from "lucide-react";

const expiringLinks = [
  {
    id: "1",
    title: "Blog Post - SEO Tips",
    code: "seotip",
    expiresAt: "Feb 25, 2026",
    daysLeft: 17,
    clicks: 97,
    status: "expiring-soon",
  },
  {
    id: "2",
    title: "Event Registration",
    code: "event1",
    expiresAt: "Feb 28, 2026",
    daysLeft: 20,
    clicks: 231,
    status: "expiring-soon",
  },
  {
    id: "3",
    title: "Customer Survey",
    code: "survey",
    expiresAt: "Apr 05, 2026",
    daysLeft: 56,
    clicks: 34,
    status: "active",
  },
  {
    id: "4",
    title: "Marketing Campaign Q1",
    code: "mktq1",
    expiresAt: "Mar 15, 2026",
    daysLeft: 35,
    clicks: 342,
    status: "active",
  },
];

const expiredLinks = [
  {
    id: "5",
    title: "Newsletter Signup",
    code: "nlsign",
    expiredAt: "Jan 10, 2026",
    daysSince: 29,
    clicks: 456,
  },
  {
    id: "6",
    title: "Black Friday Deal",
    code: "bf2025",
    expiredAt: "Dec 01, 2025",
    daysSince: 69,
    clicks: 1203,
  },
];

export default function ExpirationPage() {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [renewDialogOpen, setRenewDialogOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const [bulkAction, setBulkAction] = useState("");

  // Default expiration settings
  const [defaultExpEnabled, setDefaultExpEnabled] = useState(true);
  const [defaultExpDuration, setDefaultExpDuration] = useState("30d");
  const [autoRenew, setAutoRenew] = useState(false);
  const [expirationNotify, setExpirationNotify] = useState(true);
  const [notifyDaysBefore, setNotifyDaysBefore] = useState("3");
  const [redirectExpired, setRedirectExpired] = useState("page");
  const [customRedirectUrl, setCustomRedirectUrl] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Expiration Management
        </h1>
        <p className="text-muted-foreground">
          Configure link expiration rules and manage expiring links
        </p>
      </div>

      {/* Warning banner for expiring links */}
      {expiringLinks.filter((l) => l.daysLeft <= 30).length > 0 && (
        <Card className="border-yellow-500/30 bg-yellow-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="size-5 text-yellow-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">
                  {expiringLinks.filter((l) => l.daysLeft <= 30).length} links
                  expiring soon
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Some of your links will expire within the next 30 days. Review
                  and extend them if needed.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Default expiration settings */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Timer className="size-4" />
                Default Rules
              </CardTitle>
              <CardDescription>
                Set default expiration for new links
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Enable by default</Label>
                  <p className="text-xs text-muted-foreground">
                    Apply to all new links
                  </p>
                </div>
                <Switch
                  checked={defaultExpEnabled}
                  onCheckedChange={setDefaultExpEnabled}
                />
              </div>

              {defaultExpEnabled && (
                <>
                  <div className="space-y-2">
                    <Label>Duration</Label>
                    <Select
                      value={defaultExpDuration}
                      onValueChange={setDefaultExpDuration}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7d">7 days</SelectItem>
                        <SelectItem value="14d">14 days</SelectItem>
                        <SelectItem value="30d">30 days</SelectItem>
                        <SelectItem value="60d">60 days</SelectItem>
                        <SelectItem value="90d">90 days</SelectItem>
                        <SelectItem value="180d">6 months</SelectItem>
                        <SelectItem value="365d">1 year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Auto-renew</Label>
                      <p className="text-xs text-muted-foreground">
                        Automatically extend active links
                      </p>
                    </div>
                    <Switch
                      checked={autoRenew}
                      onCheckedChange={setAutoRenew}
                    />
                  </div>
                </>
              )}

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <Label>Expiration alerts</Label>
                  <p className="text-xs text-muted-foreground">
                    Notify before expiration
                  </p>
                </div>
                <Switch
                  checked={expirationNotify}
                  onCheckedChange={setExpirationNotify}
                />
              </div>

              {expirationNotify && (
                <div className="space-y-2">
                  <Label>Notify days before</Label>
                  <Select
                    value={notifyDaysBefore}
                    onValueChange={setNotifyDaysBefore}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 day</SelectItem>
                      <SelectItem value="3">3 days</SelectItem>
                      <SelectItem value="7">7 days</SelectItem>
                      <SelectItem value="14">14 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <Separator />

              <div className="space-y-2">
                <Label>After Expiration</Label>
                <Select
                  value={redirectExpired}
                  onValueChange={setRedirectExpired}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="page">
                      Show &quot;Link Expired&quot; page
                    </SelectItem>
                    <SelectItem value="404">Show 404 page</SelectItem>
                    <SelectItem value="redirect">
                      Redirect to custom URL
                    </SelectItem>
                  </SelectContent>
                </Select>
                {redirectExpired === "redirect" && (
                  <Input
                    placeholder="https://example.com/expired"
                    value={customRedirectUrl}
                    onChange={(e) => setCustomRedirectUrl(e.target.value)}
                    className="mt-2"
                  />
                )}
              </div>

              <Button className="w-full">
                <Check className="size-4" />
                Save Rules
              </Button>
            </CardContent>
          </Card>

          {/* Quick stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Expiration Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Expiring this week</span>
                <Badge variant="destructive">0</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Expiring this month</span>
                <Badge variant="secondary">2</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Already expired</span>
                <Badge variant="outline">2</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Never expires</span>
                <span className="text-sm font-medium">5</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Links tables */}
        <div className="lg:col-span-2 space-y-6">
          {/* Expiring soon */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="size-4" />
                    Expiring Links
                  </CardTitle>
                  <CardDescription>
                    Links with an active expiration date
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Select value={bulkAction} onValueChange={setBulkAction}>
                    <SelectTrigger className="w-[160px]">
                      <SelectValue placeholder="Bulk actions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="extend7">Extend 7 days</SelectItem>
                      <SelectItem value="extend30">Extend 30 days</SelectItem>
                      <SelectItem value="remove">Remove expiration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="pl-6 w-10">
                      <input type="checkbox" className="rounded" />
                    </TableHead>
                    <TableHead>Link</TableHead>
                    <TableHead>Expires</TableHead>
                    <TableHead>Time Left</TableHead>
                    <TableHead>Clicks</TableHead>
                    <TableHead className="text-right pr-6">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {expiringLinks.map((link) => (
                    <TableRow key={link.id}>
                      <TableCell className="pl-6">
                        <input type="checkbox" className="rounded" />
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="text-sm font-medium">{link.title}</p>
                          <p className="text-xs text-primary font-mono">
                            /r/{link.code}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell className="text-xs">
                        {link.expiresAt}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            link.daysLeft <= 7
                              ? "destructive"
                              : link.daysLeft <= 30
                                ? "secondary"
                                : "outline"
                          }
                          className="text-[10px]"
                        >
                          {link.daysLeft} days
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">
                        {link.clicks}
                      </TableCell>
                      <TableCell className="text-right pr-6">
                        <div className="flex items-center justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-7"
                            onClick={() => {
                              setSelectedLink(link.id);
                              setEditDialogOpen(true);
                            }}
                          >
                            <Edit className="size-3.5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-7"
                            onClick={() => {
                              setSelectedLink(link.id);
                              setRenewDialogOpen(true);
                            }}
                          >
                            <RefreshCw className="size-3.5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-7 text-destructive hover:text-destructive"
                          >
                            <Trash2 className="size-3.5" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Already expired */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="size-4 text-destructive" />
                Expired Links
              </CardTitle>
              <CardDescription>
                Links that have passed their expiration date
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="pl-6">Link</TableHead>
                    <TableHead>Expired On</TableHead>
                    <TableHead>Days Ago</TableHead>
                    <TableHead>Total Clicks</TableHead>
                    <TableHead className="text-right pr-6">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {expiredLinks.map((link) => (
                    <TableRow key={link.id} className="opacity-70">
                      <TableCell className="pl-6">
                        <div>
                          <p className="text-sm font-medium">{link.title}</p>
                          <p className="text-xs text-muted-foreground font-mono">
                            /r/{link.code}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell className="text-xs">
                        {link.expiredAt}
                      </TableCell>
                      <TableCell>
                        <Badge variant="destructive" className="text-[10px]">
                          {link.daysSince}d ago
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">
                        {link.clicks}
                      </TableCell>
                      <TableCell className="text-right pr-6">
                        <div className="flex items-center justify-end gap-1">
                          <Button variant="outline" size="sm">
                            <RefreshCw className="size-3" />
                            Reactivate
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-7 text-destructive hover:text-destructive"
                          >
                            <Trash2 className="size-3.5" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Edit expiration dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Expiration</DialogTitle>
            <DialogDescription>
              Change the expiration date for this link
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>New Expiration Date</Label>
              <Input type="date" />
            </div>
            <div className="space-y-2">
              <Label>New Expiration Time</Label>
              <Input type="time" />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <Label className="text-sm">Remove expiration</Label>
                <p className="text-xs text-muted-foreground">
                  Link will never expire
                </p>
              </div>
              <Switch />
            </div>
          </div>
          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => setEditDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setEditDialogOpen(false)}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Renew dialog */}
      <Dialog open={renewDialogOpen} onOpenChange={setRenewDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Extend Link Expiration</DialogTitle>
            <DialogDescription>
              Extend the expiration date from the current date
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            {[
              { label: "7 days", value: "7d" },
              { label: "14 days", value: "14d" },
              { label: "30 days", value: "30d" },
              { label: "60 days", value: "60d" },
              { label: "90 days", value: "90d" },
            ].map((option) => (
              <button
                key={option.value}
                className="w-full flex items-center justify-between rounded-lg border p-3 hover:bg-muted/50 transition-colors text-left"
              >
                <span className="text-sm font-medium">{option.label}</span>
                <ArrowRight className="size-4 text-muted-foreground" />
              </button>
            ))}
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setRenewDialogOpen(false)}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
