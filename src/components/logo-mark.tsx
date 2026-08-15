type LogoMarkProps = {
  /** Initials rendered in the center of the gradient square, e.g. "YA". */
  initials: string;
  /** Square edge length in pixels. Defaults to 64 (matches the favicon). */
  size?: number;
  /** Corner radius in pixels. Defaults to 16. */
  borderRadius?: number;
  /** Initials font size in pixels. Defaults to 38. */
  fontSize?: number;
  /** Initials color. Defaults to white. */
  color?: string;
  /**
   * Background, mirrors the navbar: bg-linear-to-br from-blue-500 via-sky-500 to-amber-400.
   * Defaults to `linear-gradient(135deg, #3b82f6 0%, #0ea5e9 50%, #f59e0b 100%)`.
   */
  background?: string;
  /**
   * Drop shadow, mirrors the navbar: shadow-md shadow-sky-500/30.
   * Defaults to `0 4px 8px 0 rgba(14, 165, 233, 0.3)`.
   */
  boxShadow?: string;
};

/**
 * The navbar-logo mark — a rounded blue→sky→amber gradient square with bold
 * initials. Renders with inline styles only, so it works both inside
 * `ImageResponse` (Satori requires an explicit `display: flex`) and in regular
 * DOM.
 */
export function LogoMark({
  initials,
  size = 64,
  borderRadius = 16,
  fontSize = 38,
  color = "#ffffff",
  background = "linear-gradient(135deg, #3b82f6 0%, #0ea5e9 50%, #f59e0b 100%)",
  boxShadow = "0 4px 8px 0 rgba(14, 165, 233, 0.3)",
}: LogoMarkProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background,
        borderRadius,
        color,
        fontSize,
        fontWeight: 900,
        boxShadow,
      }}
    >
      {initials}
    </div>
  );
}
