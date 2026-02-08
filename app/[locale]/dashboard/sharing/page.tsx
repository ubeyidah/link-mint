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
  Check,
  Code,
  Copy,
  Download,
  ExternalLink,
  Facebook,
  Mail,
  MessageCircle,
  QrCode,
  Share2,
  Twitter,
} from "lucide-react";

const links = [
  { title: "Marketing Campaign Q1", code: "mktq1" },
  { title: "Product Launch Page", code: "launch" },
  { title: "Blog Post - SEO Tips", code: "seotip" },
  { title: "Newsletter Signup", code: "nlsign" },
  { title: "Social Media Bio", code: "bio26" },
];

const socialPlatforms = [
  {
    name: "Twitter / X",
    icon: Twitter,
    color: "bg-[#1DA1F2]/10 text-[#1DA1F2]",
    shareUrl: "https://twitter.com/intent/tweet?url=",
  },
  {
    name: "Facebook",
    icon: Facebook,
    color: "bg-[#4267B2]/10 text-[#4267B2]",
    shareUrl: "https://www.facebook.com/sharer/sharer.php?u=",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    color: "bg-[#25D366]/10 text-[#25D366]",
    shareUrl: "https://wa.me/?text=",
  },
  {
    name: "Email",
    icon: Mail,
    color: "bg-primary/10 text-primary",
    shareUrl: "mailto:?body=",
  },
];

export default function SharingPage() {
  const [selectedLink, setSelectedLink] = useState("mktq1");
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [customMessage, setCustomMessage] = useState(
    "Check out this link: "
  );

  const shortUrl = `https://linkmint.app/r/${selectedLink}`;

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const embedCode = `<a href="${shortUrl}" target="_blank" rel="noopener noreferrer">Visit Link</a>`;
  const markdownCode = `[Visit Link](${shortUrl})`;
  const bbCode = `[url=${shortUrl}]Visit Link[/url]`;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Share Links</h1>
        <p className="text-muted-foreground">
          Share your links across platforms and generate embed codes
        </p>
      </div>

      {/* Link selector */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="flex-1 space-y-2">
              <Label>Select a link to share</Label>
              <Select value={selectedLink} onValueChange={setSelectedLink}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {links.map((link) => (
                    <SelectItem key={link.code} value={link.code}>
                      {link.title} (/r/{link.code})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2 flex-1">
              <Input value={shortUrl} readOnly className="font-mono text-sm" />
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleCopy(shortUrl, "url")}
              >
                {copiedField === "url" ? (
                  <Check className="size-4 text-green-500" />
                ) : (
                  <Copy className="size-4" />
                )}
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Social sharing */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Share2 className="size-4" />
              Share on Social Media
            </CardTitle>
            <CardDescription>
              One-click sharing to popular platforms
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Custom Message (optional)</Label>
              <Input
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Add a message..."
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {socialPlatforms.map((platform) => (
                <button
                  key={platform.name}
                  className="flex items-center gap-3 rounded-lg border p-3 hover:bg-muted/50 transition-colors text-left"
                >
                  <div
                    className={`size-10 rounded-lg flex items-center justify-center ${platform.color}`}
                  >
                    <platform.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{platform.name}</p>
                    <p className="text-xs text-muted-foreground">Share</p>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* QR Code */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <QrCode className="size-4" />
              QR Code
            </CardTitle>
            <CardDescription>
              Download QR code for offline sharing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center">
              <div className="size-52 bg-muted rounded-xl flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                <div className="text-center">
                  <QrCode className="size-24 text-muted-foreground/30 mx-auto" />
                  <p className="text-xs text-muted-foreground mt-2">
                    QR Code for /r/{selectedLink}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Label className="shrink-0">Size</Label>
                <Select defaultValue="256">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="128">128 x 128</SelectItem>
                    <SelectItem value="256">256 x 256</SelectItem>
                    <SelectItem value="512">512 x 512</SelectItem>
                    <SelectItem value="1024">1024 x 1024</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Label className="shrink-0">Format</Label>
                <Select defaultValue="png">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="png">PNG</SelectItem>
                    <SelectItem value="svg">SVG</SelectItem>
                    <SelectItem value="jpg">JPG</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button className="w-full">
              <Download className="size-4" />
              Download QR Code
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Embed codes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="size-4" />
            Embed Codes
          </CardTitle>
          <CardDescription>
            Copy embed code for your website or forum
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="html">
            <TabsList>
              <TabsTrigger value="html">HTML</TabsTrigger>
              <TabsTrigger value="markdown">Markdown</TabsTrigger>
              <TabsTrigger value="bbcode">BBCode</TabsTrigger>
            </TabsList>
            <TabsContent value="html" className="mt-4">
              <div className="relative">
                <pre className="rounded-lg bg-muted p-4 text-sm font-mono overflow-x-auto">
                  {embedCode}
                </pre>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 size-7"
                  onClick={() => handleCopy(embedCode, "html")}
                >
                  {copiedField === "html" ? (
                    <Check className="size-3 text-green-500" />
                  ) : (
                    <Copy className="size-3" />
                  )}
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="markdown" className="mt-4">
              <div className="relative">
                <pre className="rounded-lg bg-muted p-4 text-sm font-mono overflow-x-auto">
                  {markdownCode}
                </pre>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 size-7"
                  onClick={() => handleCopy(markdownCode, "markdown")}
                >
                  {copiedField === "markdown" ? (
                    <Check className="size-3 text-green-500" />
                  ) : (
                    <Copy className="size-3" />
                  )}
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="bbcode" className="mt-4">
              <div className="relative">
                <pre className="rounded-lg bg-muted p-4 text-sm font-mono overflow-x-auto">
                  {bbCode}
                </pre>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 size-7"
                  onClick={() => handleCopy(bbCode, "bbcode")}
                >
                  {copiedField === "bbcode" ? (
                    <Check className="size-3 text-green-500" />
                  ) : (
                    <Copy className="size-3" />
                  )}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Bulk share */}
      <Card>
        <CardHeader>
          <CardTitle>Bulk Share</CardTitle>
          <CardDescription>
            Share multiple links at once via email
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Recipients (comma-separated emails)</Label>
            <Input placeholder="user@example.com, team@example.com" />
          </div>
          <div className="space-y-2">
            <Label>Select links to share</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {links.map((link) => (
                <label
                  key={link.code}
                  className="flex items-center gap-2 rounded-lg border p-3 hover:bg-muted/50 cursor-pointer transition-colors"
                >
                  <input
                    type="checkbox"
                    className="rounded"
                    defaultChecked={link.code === selectedLink}
                  />
                  <div>
                    <p className="text-sm font-medium">{link.title}</p>
                    <p className="text-xs text-muted-foreground font-mono">
                      /r/{link.code}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>
          <Button>
            <Mail className="size-4" />
            Send Emails
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
