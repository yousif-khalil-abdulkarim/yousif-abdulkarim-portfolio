import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js enables StrictMode in dev by default, but React StrictMode's
  // double-invoked effects break @zag-js/dismissable (used by Ark UI's Dialog):
  // with lazyMount the dismissable never registers, so Escape/backdrop-click
  // don't close dialogs in dev. Disabling it keeps dev consistent with prod.
  reactStrictMode: false,
};

export default nextConfig;
