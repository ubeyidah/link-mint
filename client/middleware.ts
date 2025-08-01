import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  const { pathname } = request.nextUrl;

  // ✅ If user is trying to access a protected route (like /dashboard)
  const protectedRoutes = ["/dashboard", "/profile"];
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && !sessionCookie) {
    // Not authenticated → redirect to sign-in
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

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
    // Apply middleware to all relevant pages
    "/dashboard",
    "/settings",
    "/account",
    "/sign-in",
    "/sign-up",
  ],
};
