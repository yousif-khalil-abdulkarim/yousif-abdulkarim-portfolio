// Preloaded via `tsx --import` (see package.json "resume:generate").
// Node can't parse binary assets, but the portfolio data statically imports the
// portrait image (webpack/Next handles real image imports at build time). This
// hook stubs those asset imports so the tsx script can load the data to build PDFs.
import { registerHooks } from "node:module";

registerHooks({
  load(url, context, nextLoad) {
    if (/\.(jpe?g|png|gif|webp|avif|svg)$/.test(url)) {
      return { format: "module", source: "export default {};", shortCircuit: true };
    }
    return nextLoad(url, context);
  },
});
