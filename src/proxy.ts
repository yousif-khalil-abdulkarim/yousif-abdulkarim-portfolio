import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Redirect the site root (`/`) to the main portfolio (`/main`).
 * Runs only for the exact root path via the matcher below.
 */
export function proxy(request: NextRequest) {
  return NextResponse.redirect(new URL("/main", request.url), 308);
}

export const config = {
  matcher: "/",
};
