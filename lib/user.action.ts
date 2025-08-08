"use server";

import { headers } from "next/headers";
import { auth } from "./auth";
import { redirect } from "next/navigation";
import { cache } from "react";

export const requireAuth = cache(async () => {
  const user = await auth.api.getSession({
    headers: await headers(),
  });
  if (!user?.session) {
    return redirect("/sign-in");
  }
  return user;
});
