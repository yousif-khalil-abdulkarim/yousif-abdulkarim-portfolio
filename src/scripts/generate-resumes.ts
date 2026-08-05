import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { allPortfolios } from "../data/portfolios";
import { renderResumePdf, resumeFileName } from "../lib/pdf-resume";

// Output directory relative to the project root (scripts run from the repo root).
const outputDir = resolve(process.cwd(), "public/resumes");

async function main() {
  // Wipe any previously generated resumes first so stale files don't linger.
  rmSync(outputDir, { recursive: true, force: true });
  mkdirSync(outputDir, { recursive: true });

  const keys = Object.keys(allPortfolios);
  if (keys.length === 0) {
    console.log("No portfolios found in allPortfolios — nothing to generate.");
    return;
  }

  for (const key of keys) {
    const data = allPortfolios[key];
    const buffer = await renderResumePdf(data);
    const filePath = resolve(outputDir, resumeFileName(data, key));
    writeFileSync(filePath, buffer);
    console.log(`✓ Generated ${filePath} (${buffer.length} bytes)`);
  }

  console.log(`Done — generated ${keys.length} resume PDF(s) in ${outputDir}`);
}

void main();
