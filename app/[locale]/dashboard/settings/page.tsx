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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  AlertTriangle,
  Bell,
  Check,
  Globe,
  Key,
  Paintbrush,
  Shield,
  Trash2,
  User,
} from "lucide-react";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  // Profile state
  const [name, setName] = useState("John Doe");
  const [email] = useState("john@example.com");

  // Preferences
  const [defaultExpiration, setDefaultExpiration] = useState("never");
  const [defaultDomain, setDefaultDomain] = useState("linkmint.app");
  const [isPublicProfile, setIsPublicProfile] = useState(false);

  // Notifications
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [clickAlerts, setClickAlerts] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(true);
  const [expirationAlerts, setExpirationAlerts] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);

  // Security
  const [twoFactor, setTwoFactor] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="danger">Danger Zone</TabsTrigger>
        </TabsList>

        {/* Profile tab */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="size-4" />
                Profile Information
              </CardTitle>
              <CardDescription>
                Update your personal information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">
                  JD
                </div>
                <div>
                  <Button variant="outline" size="sm">
                    Change Avatar
                  </Button>
                  <p className="text-xs text-muted-foreground mt-1">
                    JPG, PNG or GIF. Max 2MB.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" value={email} disabled />
                  <p className="text-xs text-muted-foreground">
                    Contact support to change email
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="flex items-center gap-0">
                  <span className="text-xs text-muted-foreground bg-muted px-3 py-2 rounded-l-md border border-r-0 h-9 flex items-center">
                    linkmint.app/
                  </span>
                  <Input
                    id="username"
                    defaultValue="johndoe"
                    className="rounded-l-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label>Public Profile</Label>
                  <p className="text-xs text-muted-foreground">
                    Allow others to see your public links
                  </p>
                </div>
                <Switch
                  checked={isPublicProfile}
                  onCheckedChange={setIsPublicProfile}
                />
              </div>

              <Button onClick={handleSave}>
                {saved ? (
                  <>
                    <Check className="size-4" /> Saved
                  </>
                ) : (
                  "Save Changes"
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preferences tab */}
        <TabsContent value="preferences">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="size-4" />
                  Link Defaults
                </CardTitle>
                <CardDescription>
                  Default settings for new links
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Default Domain</Label>
                  <Select
                    value={defaultDomain}
                    onValueChange={setDefaultDomain}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="linkmint.app">
                        linkmint.app
                      </SelectItem>
                      <SelectItem value="lnk.mt">lnk.mt (Pro)</SelectItem>
                      <SelectItem value="custom">
                        Custom Domain (Enterprise)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Default Expiration</Label>
                  <Select
                    value={defaultExpiration}
                    onValueChange={setDefaultExpiration}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="never">Never</SelectItem>
                      <SelectItem value="7d">7 days</SelectItem>
                      <SelectItem value="30d">30 days</SelectItem>
                      <SelectItem value="90d">90 days</SelectItem>
                      <SelectItem value="1y">1 year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Short Code Length</Label>
                  <Select defaultValue="6">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4">4 characters</SelectItem>
                      <SelectItem value="6">6 characters</SelectItem>
                      <SelectItem value="8">8 characters</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Paintbrush className="size-4" />
                  Appearance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Theme</Label>
                  <Select defaultValue="system">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="am">Amharic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Button onClick={handleSave}>
              {saved ? (
                <>
                  <Check className="size-4" /> Saved
                </>
              ) : (
                "Save Preferences"
              )}
            </Button>
          </div>
        </TabsContent>

        {/* Notifications tab */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="size-4" />
                Notification Preferences
              </CardTitle>
              <CardDescription>
                Choose what notifications you receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                {
                  label: "Email Notifications",
                  description: "Receive email updates about your account",
                  checked: emailNotifications,
                  onChange: setEmailNotifications,
                },
                {
                  label: "Click Milestone Alerts",
                  description:
                    "Get notified when a link hits 100, 500, 1000 clicks",
                  checked: clickAlerts,
                  onChange: setClickAlerts,
                },
                {
                  label: "Weekly Analytics Report",
                  description:
                    "Receive a weekly summary of your link performance",
                  checked: weeklyReport,
                  onChange: setWeeklyReport,
                },
                {
                  label: "Expiration Alerts",
                  description:
                    "Get notified 3 days before a link expires",
                  checked: expirationAlerts,
                  onChange: setExpirationAlerts,
                },
                {
                  label: "Marketing & Updates",
                  description:
                    "Product updates, tips, and promotional offers",
                  checked: marketingEmails,
                  onChange: setMarketingEmails,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="space-y-0.5">
                    <Label>{item.label}</Label>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <Switch
                    checked={item.checked}
                    onCheckedChange={item.onChange}
                  />
                </div>
              ))}

              <Button onClick={handleSave}>
                {saved ? (
                  <>
                    <Check className="size-4" /> Saved
                  </>
                ) : (
                  "Save Notifications"
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security tab */}
        <TabsContent value="security">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="size-4" />
                  Change Password
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    placeholder="Enter current password"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="Enter new password"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm new password"
                  />
                </div>
                <Button>Update Password</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="size-4" />
                  Two-Factor Authentication
                </CardTitle>
                <CardDescription>
                  Add an extra layer of security to your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <Label>Enable 2FA</Label>
                    <p className="text-xs text-muted-foreground">
                      Use an authenticator app for login verification
                    </p>
                  </div>
                  <Switch
                    checked={twoFactor}
                    onCheckedChange={setTwoFactor}
                  />
                </div>
                {twoFactor && (
                  <div className="mt-4 rounded-lg border bg-muted/50 p-4 text-center">
                    <p className="text-sm font-medium mb-2">
                      Scan QR Code with your authenticator app
                    </p>
                    <div className="size-40 bg-muted rounded-lg mx-auto flex items-center justify-center border-2 border-dashed">
                      <span className="text-xs text-muted-foreground">
                        QR Code Placeholder
                      </span>
                    </div>
                    <div className="mt-4 space-y-2">
                      <Label htmlFor="totp">Verification Code</Label>
                      <Input
                        id="totp"
                        placeholder="Enter 6-digit code"
                        className="max-w-xs mx-auto text-center"
                        maxLength={6}
                      />
                    </div>
                    <Button className="mt-3" size="sm">
                      Verify & Enable
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Active Sessions</CardTitle>
                <CardDescription>
                  Devices currently logged into your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  {
                    device: "Chrome on macOS",
                    location: "New York, US",
                    time: "Active now",
                    current: true,
                  },
                  {
                    device: "Safari on iPhone",
                    location: "New York, US",
                    time: "2 hours ago",
                    current: false,
                  },
                  {
                    device: "Firefox on Windows",
                    location: "London, UK",
                    time: "3 days ago",
                    current: false,
                  },
                ].map((session) => (
                  <div
                    key={session.device}
                    className="flex items-center justify-between rounded-lg border p-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium">{session.device}</p>
                        {session.current && (
                          <Badge className="text-[10px]">Current</Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {session.location} · {session.time}
                      </p>
                    </div>
                    {!session.current && (
                      <Button variant="ghost" size="sm">
                        Revoke
                      </Button>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>API Keys</CardTitle>
                <CardDescription>
                  Manage API keys for programmatic access
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <p className="text-sm font-medium">Production Key</p>
                    <p className="text-xs text-muted-foreground font-mono">
                      lm_prod_****...****k8j2
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Copy
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      Revoke
                    </Button>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Key className="size-3" />
                  Generate New Key
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Danger zone tab */}
        <TabsContent value="danger">
          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <AlertTriangle className="size-4" />
                Danger Zone
              </CardTitle>
              <CardDescription>
                Irreversible actions. Please be certain.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-destructive/20 p-4">
                <div>
                  <p className="text-sm font-medium">Export Data</p>
                  <p className="text-xs text-muted-foreground">
                    Download all your links and analytics as CSV
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Export
                </Button>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-destructive/20 p-4">
                <div>
                  <p className="text-sm font-medium">Delete All Links</p>
                  <p className="text-xs text-muted-foreground">
                    Permanently remove all links and analytics data
                  </p>
                </div>
                <Button variant="destructive" size="sm">
                  Delete All
                </Button>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-destructive/20 p-4">
                <div>
                  <p className="text-sm font-medium text-destructive">
                    Delete Account
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Permanently delete your account and all data
                  </p>
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => setDeleteDialogOpen(true)}
                >
                  <Trash2 className="size-3" />
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>

          <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-destructive">
                  Delete Account
                </DialogTitle>
                <DialogDescription>
                  This action is permanent and cannot be undone. All your links,
                  analytics, and account data will be permanently deleted.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-2">
                <Label htmlFor="confirmDelete">
                  Type <span className="font-mono font-bold">DELETE</span> to
                  confirm
                </Label>
                <Input id="confirmDelete" placeholder="DELETE" />
              </div>
              <DialogFooter className="gap-2">
                <Button
                  variant="outline"
                  onClick={() => setDeleteDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => setDeleteDialogOpen(false)}
                >
                  Delete Account
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </TabsContent>
      </Tabs>
    </div>
  );
}
