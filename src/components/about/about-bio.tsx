import { Fragment } from "react";
import type { BioParagraph } from "@/data/types";

type AboutBioProps = {
  /** Bio paragraphs, each a sequence of styled text runs. */
  paragraphs: BioParagraph[];
};

/** The About bio text, with emphasis runs rendered bold/accent. */
export function AboutBio({ paragraphs }: AboutBioProps) {
  return (
    <div className="space-y-4 text-body-foreground">
      {paragraphs.map((paragraph, pIndex) => (
        <p
          key={pIndex}
          className={pIndex === 0 ? "text-lg leading-8" : "leading-8"}
        >
          {paragraph.map((run, rIndex) =>
            run.emphasis ? (
              <span
                key={rIndex}
                className="font-medium text-strong-foreground"
              >
                {run.text}
              </span>
            ) : (
              <Fragment key={rIndex}>{run.text}</Fragment>
            ),
          )}
        </p>
      ))}
    </div>
  );
}
