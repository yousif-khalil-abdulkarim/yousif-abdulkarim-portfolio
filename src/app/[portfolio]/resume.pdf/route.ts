import { notFound } from "next/navigation";
import { allPortfolios } from "@/data/portfolios";
import { renderResumePdf, resumeFileName } from "@/lib/pdf-resume";
import { NextRequest } from "next/server";

// `@react-pdf/renderer` relies on Node APIs under the hood, so this route
// must run on the Node.js runtime (the default in Next.js 16).
export const runtime = "nodejs";

type ResumePdfRouteProps = {
  params: Promise<{ portfolio: string }>;
};

/**
 * GET /[portfolio]/resume.pdf
 *
 * Generates a fresh A4 PDF resume for the portfolio on demand and serves it
 * as an attachment download (e.g. `/main/resume.pdf` →
 * `Yousif_Abdulkarim_resume_main.pdf`).
 */
export async function GET(
  _request: NextRequest,
  { params }: ResumePdfRouteProps,
) {
  const { portfolio } = await params;
  const data = allPortfolios[portfolio];
  if (!data) notFound();

  // `renderResumePdf` returns a Uint8Array view over exactly the PDF bytes.
  const pdf = await renderResumePdf(data);

  // Served inline so the Resume button opens the PDF in the browser's built-in
  // viewer at the site URL (https). Serving it as `attachment` instead makes the
  // user open the file from disk, which trips Chrome's `file://` origin guard
  // ("Unsafe attempt to load URL file:///..."). The filename below still sets
  // the default name used by the viewer's Save/Download button.
  return new Response(new Blob([pdf], { type: "application/pdf" }), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${resumeFileName(data, portfolio)}"`,
    },
  });
}
