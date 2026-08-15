/** "Back to top ↑" link that jumps to the page top (#home). */
export function BackToTop() {
  return (
    <a
      href="#home"
      className="inline-flex items-center gap-1 font-medium text-title-foreground transition-colors hover:text-accent-strong"
    >
      Back to top ↑
    </a>
  );
}
