import { headers } from "next/headers";
import { auth } from "./auth";
import { redirect } from "next/navigation";
import { cache } from "react";

export const verifySession = cache(async () => {
  const user = await auth.api.getSession({
    headers: await headers(),
  });
  if (!user?.session) {
    redirect("/sign-in");
  }
  return user;
});
