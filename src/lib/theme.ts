import { cookies } from "next/headers";

export const THEME_COOKIE = "theme";

/** Reads the current light/dark theme from the cookie (server-side). */
export async function getTheme(): Promise<"light" | "dark"> {
  const cookieStore = await cookies();
  return cookieStore.get(THEME_COOKIE)?.value === "dark" ? "dark" : "light";
}
