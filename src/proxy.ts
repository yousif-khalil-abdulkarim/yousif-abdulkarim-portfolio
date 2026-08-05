import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Proxy: route the root path to the main portfolio (/main).
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/main", request.url), 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
