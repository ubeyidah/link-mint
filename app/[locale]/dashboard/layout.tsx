"use client";

import { RootLayoutProps } from "@/types";
import React from "react";
import { AppSidebar } from "./_components/sidebar";
import UserProfile from "@/components/share/user-profile";
import { authClient } from "@/lib/auth-client";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

const DashboardLayout = ({ children }: RootLayoutProps) => {
  const { data: session } = authClient.useSession();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Top header bar */}
        <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center gap-2 border-b bg-background/80 backdrop-blur-xl px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 !h-4" />
          <div className="flex-1" />
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="size-4" />
            <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-primary" />
          </Button>
          {session && (
            <UserProfile
              email={session.user.email}
              name={session.user.name}
              image={session.user.image || ""}
            />
          )}
        </header>

        {/* Page content */}
        <div className="flex-1 p-4 md:p-6 overflow-auto">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
