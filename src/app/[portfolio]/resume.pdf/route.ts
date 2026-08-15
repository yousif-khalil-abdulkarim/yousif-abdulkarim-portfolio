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

  // `renderResumePdf` is backed by a Node Buffer (an ArrayBuffer), so narrow
  // the generic view to satisfy the DOM `BlobPart` type.
  const pdf = (await renderResumePdf(data)) as Uint8Array<ArrayBuffer>;

  return new Response(new Blob([pdf], { type: "application/pdf" }), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${resumeFileName(data, portfolio)}"`,
    },
  });
}
