import { Fragment } from "react";
import type { BioParagraph } from "@/data/types";

type AboutBioProps = {
  /** Bio paragraphs, each a sequence of styled text runs. */
  paragraphs: BioParagraph[];
};

/** The About bio text, with emphasis runs rendered bold/accent. */
export function AboutBio({ paragraphs }: AboutBioProps) {
  return (
    <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
      {paragraphs.map((paragraph, pIndex) => (
        <p
          key={pIndex}
          className={pIndex === 0 ? "text-lg leading-8" : "leading-8"}
        >
          {paragraph.map((run, rIndex) =>
            run.emphasis ? (
              <span
                key={rIndex}
                className="font-medium text-zinc-900 dark:text-zinc-100"
              >
                {run.text}
              </span>
            ) : (
              <Fragment key={rIndex}>{run.text}</Fragment>
            )
          )}
        </p>
      ))}
    </div>
  );
}
