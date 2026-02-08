import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const intlResponse = intlMiddleware(request);
  if (intlResponse) {
    return intlResponse;
  }

  const sessionCookie = getSessionCookie(request);
  const { pathname } = request.nextUrl;

  // ✅ If user is trying to access a protected route (like /dashboard)
  const protectedRoutes = [
    "/dashboard",
    "/dashboard/settings",
    "/dashboard/plan",
  ];
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // if (isProtected && !sessionCookie) {
  //   // Not authenticated → redirect to sign-in
  //   return NextResponse.redirect(new URL("/sign-in", request.url));
  // }

  // ✅ If user is already logged in and tries to visit /sign-in or /sign-up
  const authPages = ["/sign-in", "/sign-up"];
  const isAuthPage = authPages.includes(pathname);

  if (isAuthPage && sessionCookie) {
    // Already authenticated → redirect to dashboard
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // ✅ Default allow
  return NextResponse.next();
}

export const config = {
  matcher: [
    // i18n matcher: all except api, trpc, _next, _vercel, and files with dot
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
  ],
};
