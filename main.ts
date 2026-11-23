// One Line, Zero Use: The Useless Superpower Sprint
// Writes a single original one-liner naming a hilariously useless
// superpower to <output>/entry.txt. Deterministic, offline, stdlib only.
//
// The line (my own wording, written fresh in this session):
//   I can predict rain with 100% accuracy, but only once I'm already soaked.
// The superpower sounds flawless (100% accuracy), then the last few words
// undercut it completely: the prediction only arrives once the rain has
// already done its worst. No explanation, the reader does the leap.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I can predict rain with 100% accuracy, but only once I'm already soaked.";

// Fail loudly instead of shipping a line the gate would refuse.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || !LINE.trim()) {
  throw new Error(`entry line fails the gate: ${chars} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.error(`wrote entry.txt (${chars} chars)`);
