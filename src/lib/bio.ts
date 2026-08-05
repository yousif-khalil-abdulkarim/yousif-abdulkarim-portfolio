import type { BioParagraph } from "@/data/types";

/**
 * Flattens a single bio paragraph (styled runs) into plain text — used where
 * rich emphasis styling doesn't apply (metadata descriptions and the PDF resume).
 */
export function bioToPlainText(bio: BioParagraph): string {
  return bio.map((run) => run.text).join("");
}
