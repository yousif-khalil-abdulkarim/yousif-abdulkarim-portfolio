/** "Back to top ↑" link that jumps to the page top (#home). */
export function BackToTop() {
  return (
    <a
      href="#home"
      className="inline-flex items-center gap-1 font-medium text-zinc-700 transition-colors hover:text-sky-600 dark:text-zinc-300 dark:hover:text-sky-400"
    >
      Back to top ↑
    </a>
  );
}
