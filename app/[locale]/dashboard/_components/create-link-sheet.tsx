"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  AudioLines,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronUp,
  Copy,
  Globe,
  Link2,
  Lock,
  QrCode,
  Share2,
  Sparkles,
  Tag,
} from "lucide-react";
import Link from "next/link";

interface CreateLinkSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateLinkSheet({ open, onOpenChange }: CreateLinkSheetProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortCode, setShortCode] = useState("");
  const [expirationEnabled, setExpirationEnabled] = useState(false);
  const [expirationDate, setExpirationDate] = useState("");
  const [expirationTime, setExpirationTime] = useState("");
  const [passwordEnabled, setPasswordEnabled] = useState(false);
  const [password, setPassword] = useState("");
  const [tags, setTags] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [iosRedirect, setIosRedirect] = useState("");
  const [androidRedirect, setAndroidRedirect] = useState("");
  const [utmSource, setUtmSource] = useState("");
  const [utmMedium, setUtmMedium] = useState("");
  const [utmCampaign, setUtmCampaign] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const generateCode = () => {
    const code = Math.random().toString(36).substring(2, 8);
    setShortCode(code);
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setOriginalUrl("");
    setShortCode("");
    setExpirationEnabled(false);
    setExpirationDate("");
    setExpirationTime("");
    setPasswordEnabled(false);
    setPassword("");
    setTags("");
    setShowAdvanced(false);
    setIosRedirect("");
    setAndroidRedirect("");
    setUtmSource("");
    setUtmMedium("");
    setUtmCampaign("");
    setIsCreated(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreated(true);
  };

  const handleClose = (value: boolean) => {
    if (!value) resetForm();
    onOpenChange(value);
  };

  return (
    <Sheet open={open} onOpenChange={handleClose}>
      <SheetContent side="right" className="overflow-y-auto flex flex-col p-0">
        {isCreated ? (
          /* ───────── Success state ───────── */
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center gap-4">
            <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Check className="size-8 text-primary" />
            </div>
            <h2 className="text-xl font-bold">Link Created!</h2>
            <p className="text-muted-foreground text-sm max-w-xs">
              Your shortened link is ready to use
            </p>

            <div className="bg-muted/50 rounded-lg p-4 w-full max-w-xs">
              <p className="text-xs text-muted-foreground mb-1">
                Your short link
              </p>
              <div className="flex items-center justify-center gap-2">
                <code className="text-base font-mono text-primary">
                  linkmint.app/r/{shortCode || "abc123"}
                </code>
                <button
                  className="p-1 rounded-md hover:bg-muted transition-colors"
                  onClick={() =>
                    navigator.clipboard?.writeText(
                      `https://linkmint.app/r/${shortCode || "abc123"}`
                    )
                  }
                >
                  <Copy className="size-3.5" />
                </button>
              </div>
            </div>

            {/* QR placeholder */}
            <div className="size-36 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
              <div className="text-center">
                <QrCode className="size-14 text-muted-foreground/30 mx-auto" />
                <p className="text-[10px] text-muted-foreground mt-1">
                  QR Code
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full max-w-xs pt-2">
              <Button
                onClick={() => {
                  setIsCreated(false);
                  resetForm();
                }}
              >
                <Sparkles className="size-4" />
                Create Another
              </Button>
              <Button variant="outline" asChild>
                <Link href={`/dashboard/sharing?link=${shortCode || "abc123"}`}>
                  <Share2 className="size-4" />
                  Share Link
                </Link>
              </Button>
              <Button variant="ghost" onClick={() => handleClose(false)}>
                Done
              </Button>
            </div>
          </div>
        ) : (
          /* ───────── Form state ───────── */
          <>
            <SheetHeader className="p-6 pb-0">
              <SheetTitle className="flex items-center gap-2">
                <Link2 className="size-4" />
                Create New Link
              </SheetTitle>
              <SheetDescription>
                Shorten a URL and customize its settings
              </SheetDescription>
            </SheetHeader>

            <form
              onSubmit={handleSubmit}
              className="flex-1 flex flex-col overflow-y-auto"
            >
              <div className="flex-1 space-y-5 p-6">
                {/* ── Basic fields ── */}
                <div className="space-y-2">
                  <Label htmlFor="sh-title">Title</Label>
                  <Input
                    id="sh-title"
                    placeholder="e.g., Marketing Campaign Q1"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sh-desc">Description (optional)</Label>
                  <Textarea
                    id="sh-desc"
                    placeholder="Add a note about this link..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sh-url">Destination URL</Label>
                  <Input
                    id="sh-url"
                    placeholder="https://example.com/your-long-url"
                    type="url"
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sh-code">Short Code</Label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center flex-1 gap-0">
                      <span className="text-[11px] text-muted-foreground bg-muted px-2 py-2 rounded-l-md border border-r-0 h-9 flex items-center whitespace-nowrap">
                        linkmint.app/r/
                      </span>
                      <Input
                        id="sh-code"
                        placeholder="custom-code"
                        value={shortCode}
                        onChange={(e) => setShortCode(e.target.value)}
                        className="rounded-l-none"
                      />
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={generateCode}
                    >
                      <AudioLines className="size-3.5" />
                      Generate
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sh-tags">Tags (optional)</Label>
                  <Input
                    id="sh-tags"
                    placeholder="marketing, campaign (comma separated)"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                </div>

                <Separator />

                {/* ── Expiration toggle ── */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="size-4 text-muted-foreground" />
                      <Label>Expiration</Label>
                    </div>
                    <Switch
                      checked={expirationEnabled}
                      onCheckedChange={setExpirationEnabled}
                    />
                  </div>
                  {expirationEnabled && (
                    <div className="grid gap-3 grid-cols-2 pl-6">
                      <div className="space-y-1">
                        <Label className="text-xs">Date</Label>
                        <Input
                          type="date"
                          value={expirationDate}
                          onChange={(e) => setExpirationDate(e.target.value)}
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Time</Label>
                        <Input
                          type="time"
                          value={expirationTime}
                          onChange={(e) => setExpirationTime(e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* ── Password toggle ── */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Lock className="size-4 text-muted-foreground" />
                      <Label>Password Protection</Label>
                    </div>
                    <Switch
                      checked={passwordEnabled}
                      onCheckedChange={setPasswordEnabled}
                    />
                  </div>
                  {passwordEnabled && (
                    <div className="pl-6">
                      <Input
                        type="password"
                        placeholder="Enter a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <p className="text-[11px] text-muted-foreground mt-1">
                        Visitors must enter this password to access the link.
                      </p>
                    </div>
                  )}
                </div>

                <Separator />

                {/* ── Advanced (collapsible) ── */}
                <button
                  type="button"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-full"
                  onClick={() => setShowAdvanced(!showAdvanced)}
                >
                  {showAdvanced ? (
                    <ChevronUp className="size-4" />
                  ) : (
                    <ChevronDown className="size-4" />
                  )}
                  Advanced Options
                </button>

                {showAdvanced && (
                  <div className="space-y-5 pl-1">
                    {/* Device targeting */}
                    <div className="space-y-3">
                      <p className="text-sm font-medium flex items-center gap-2">
                        <Globe className="size-3.5 text-muted-foreground" />
                        Device Targeting
                      </p>
                      <div className="space-y-2">
                        <Label className="text-xs">iOS Redirect URL</Label>
                        <Input
                          placeholder="https://apps.apple.com/..."
                          value={iosRedirect}
                          onChange={(e) => setIosRedirect(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs">Android Redirect URL</Label>
                        <Input
                          placeholder="https://play.google.com/..."
                          value={androidRedirect}
                          onChange={(e) => setAndroidRedirect(e.target.value)}
                        />
                      </div>
                    </div>

                    <Separator />

                    {/* UTM parameters */}
                    <div className="space-y-3">
                      <p className="text-sm font-medium flex items-center gap-2">
                        <Tag className="size-3.5 text-muted-foreground" />
                        UTM Parameters
                      </p>
                      <div className="space-y-2">
                        <Label className="text-xs">Source</Label>
                        <Input
                          placeholder="e.g., twitter"
                          value={utmSource}
                          onChange={(e) => setUtmSource(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs">Medium</Label>
                        <Input
                          placeholder="e.g., social"
                          value={utmMedium}
                          onChange={(e) => setUtmMedium(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs">Campaign</Label>
                        <Input
                          placeholder="e.g., spring_sale"
                          value={utmCampaign}
                          onChange={(e) => setUtmCampaign(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* ── Live preview ── */}
                {(originalUrl || shortCode) && (
                  <>
                    <Separator />
                    <div className="rounded-lg bg-muted/50 p-3 space-y-1.5">
                      <p className="text-xs font-medium text-muted-foreground">
                        Preview
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground text-xs">
                          Short URL:
                        </span>
                        <code className="text-primary font-mono text-xs">
                          linkmint.app/r/{shortCode || "..."}
                        </code>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground text-xs">
                          Points to:
                        </span>
                        <span className="text-xs truncate max-w-[220px]">
                          {originalUrl || "..."}
                        </span>
                      </div>
                      {expirationEnabled && expirationDate && (
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CalendarDays className="size-3" />
                          Expires {expirationDate} {expirationTime}
                        </div>
                      )}
                      {passwordEnabled && (
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Lock className="size-3" />
                          Password protected
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* ── Footer ── */}
              <div className="border-t p-4 flex gap-2">
                <Button type="submit" className="flex-1">
                  <Link2 className="size-4" />
                  Create Link
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleClose(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
