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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart3,
  Copy,
  Edit,
  ExternalLink,
  Filter,
  Link2,
  MoreHorizontal,
  Plus,
  QrCode,
  Search,
  Share2,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { CreateLinkSheet } from "../_components/create-link-sheet";

const allLinks = [
  {
    id: "1",
    title: "Marketing Campaign Q1",
    shortCode: "mktq1",
    originalUrl: "https://example.com/campaigns/marketing-q1-2026-launch",
    clicks: 342,
    status: "active" as const,
    createdAt: "Jan 15, 2026",
    expiresAt: "Mar 15, 2026",
    tags: ["marketing", "campaign"],
  },
  {
    id: "2",
    title: "Product Launch Page",
    shortCode: "launch",
    originalUrl: "https://example.com/products/new-product-launch-2026",
    clicks: 189,
    status: "active" as const,
    createdAt: "Jan 20, 2026",
    expiresAt: null,
    tags: ["product"],
  },
  {
    id: "3",
    title: "Blog Post - SEO Tips",
    shortCode: "seotip",
    originalUrl: "https://blog.example.com/seo-tips-for-2026-complete-guide",
    clicks: 97,
    status: "active" as const,
    createdAt: "Jan 25, 2026",
    expiresAt: "Feb 25, 2026",
    tags: ["blog", "seo"],
  },
  {
    id: "4",
    title: "Newsletter Signup",
    shortCode: "nlsign",
    originalUrl: "https://example.com/newsletter/signup-form-premium",
    clicks: 456,
    status: "expired" as const,
    createdAt: "Dec 10, 2025",
    expiresAt: "Jan 10, 2026",
    tags: ["newsletter"],
  },
  {
    id: "5",
    title: "Social Media Bio",
    shortCode: "bio26",
    originalUrl: "https://example.com/about/team/social-links",
    clicks: 78,
    status: "active" as const,
    createdAt: "Feb 01, 2026",
    expiresAt: null,
    tags: ["social"],
  },
  {
    id: "6",
    title: "Black Friday Deal",
    shortCode: "bf2025",
    originalUrl: "https://shop.example.com/deals/black-friday-2025",
    clicks: 1203,
    status: "expired" as const,
    createdAt: "Nov 20, 2025",
    expiresAt: "Dec 01, 2025",
    tags: ["promo", "sale"],
  },
  {
    id: "7",
    title: "Customer Survey",
    shortCode: "survey",
    originalUrl: "https://forms.example.com/customer-satisfaction-2026",
    clicks: 34,
    status: "active" as const,
    createdAt: "Feb 05, 2026",
    expiresAt: "Apr 05, 2026",
    tags: ["survey"],
  },
  {
    id: "8",
    title: "API Documentation",
    shortCode: "apidoc",
    originalUrl: "https://docs.example.com/api/v3/reference",
    clicks: 567,
    status: "active" as const,
    createdAt: "Jan 02, 2026",
    expiresAt: null,
    tags: ["docs", "api"],
  },
  {
    id: "9",
    title: "Event Registration",
    shortCode: "event1",
    originalUrl: "https://events.example.com/tech-conference-2026-registration",
    clicks: 231,
    status: "inactive" as const,
    createdAt: "Jan 18, 2026",
    expiresAt: "Feb 28, 2026",
    tags: ["event"],
  },
  {
    id: "10",
    title: "Referral Program",
    shortCode: "refer",
    originalUrl: "https://example.com/referral/invite-friends-program",
    clicks: 145,
    status: "active" as const,
    createdAt: "Feb 03, 2026",
    expiresAt: null,
    tags: ["referral", "growth"],
  },
];

export default function LinksPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [createSheetOpen, setCreateSheetOpen] = useState(false);

  const filteredLinks = allLinks.filter((link) => {
    const matchesSearch =
      link.title.toLowerCase().includes(search.toLowerCase()) ||
      link.shortCode.toLowerCase().includes(search.toLowerCase()) ||
      link.originalUrl.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || link.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleCopy = (shortCode: string, id: string) => {
    navigator.clipboard?.writeText(`https://linkmint.app/r/${shortCode}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const statusColor = (status: string) => {
    switch (status) {
      case "active":
        return "default";
      case "expired":
        return "destructive";
      case "inactive":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Links</h1>
          <p className="text-muted-foreground">
            Manage all your shortened links
          </p>
        </div>
        <Button onClick={() => setCreateSheetOpen(true)}>
            <Plus className="size-4" />
            Create Link
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                placeholder="Search links..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex gap-2">
              <Select
                value={statusFilter}
                onValueChange={setStatusFilter}
              >
                <SelectTrigger className="w-[140px]">
                  <Filter className="size-4 mr-2" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="expired">Expired</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Links table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-4">Link</TableHead>
                <TableHead>Short URL</TableHead>
                <TableHead>Clicks</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Expires</TableHead>
                <TableHead className="text-right pr-4">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLinks.map((link) => (
                <TableRow key={link.id}>
                  <TableCell className="pl-4">
                    <div className="max-w-[200px]">
                      <p className="font-medium text-sm truncate">
                        {link.title}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {link.originalUrl}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-mono text-primary">
                        /r/{link.shortCode}
                      </span>
                      <button
                        onClick={() => handleCopy(link.shortCode, link.id)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Copy className="size-3" />
                      </button>
                      {copiedId === link.id && (
                        <span className="text-[10px] text-green-500">
                          Copied!
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">{link.clicks}</span>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={statusColor(link.status) as "default" | "destructive" | "secondary" | "outline"}
                      className="text-[10px] capitalize"
                    >
                      {link.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    {link.createdAt}
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    {link.expiresAt || "Never"}
                  </TableCell>
                  <TableCell className="text-right pr-4">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="icon" className="size-7" asChild>
                        <Link href={`/dashboard/analytics?link=${link.shortCode}`}>
                          <BarChart3 className="size-3.5" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" className="size-7" asChild>
                        <Link href={`/dashboard/links/${link.id}/edit`}>
                          <Edit className="size-3.5" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" className="size-7" asChild>
                        <Link href={`/dashboard/sharing?link=${link.shortCode}`}>
                          <Share2 className="size-3.5" />
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-7 text-destructive hover:text-destructive"
                        onClick={() => {
                          setSelectedLink(link.id);
                          setDeleteDialogOpen(true);
                        }}
                      >
                        <Trash2 className="size-3.5" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredLinks.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Link2 className="size-10 text-muted-foreground mb-3" />
              <p className="text-sm font-medium">No links found</p>
              <p className="text-xs text-muted-foreground mt-1">
                Try adjusting your search or filters
              </p>
            </div>
          )}

          {/* Pagination */}
          <div className="flex items-center justify-between px-4 py-3 border-t">
            <p className="text-xs text-muted-foreground">
              Showing {filteredLinks.length} of {allLinks.length} links
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Delete confirmation dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Delete Link</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this link? This action cannot be
              undone. All analytics data associated with this link will also be
              removed.
            </DialogDescription>
          </DialogHeader>
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
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Create link sheet */}
      <CreateLinkSheet open={createSheetOpen} onOpenChange={setCreateSheetOpen} />
    </div>
  );
}


