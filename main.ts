// One Word From Grandma — entry program.
//
// Writes exactly one word to $MAKEFUN_OUTPUT_DIR/entry.txt:
// the single word our grandma would text about AI.
//
// Deterministic: no clock, no randomness, no network, no environment
// reads other than the output directory the harness provides.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Nosy";

// Gate (mirrors the competition's sealed scorer): the entry must be
// exactly one word, 1 to 30 characters, and not only white space.
// Refuse to write anything that fails it rather than emitting a
// bad entry.
const trimmed = WORD.trim();
if (trimmed.length < 1 || trimmed.length > 30) {
  throw new Error(`entry must be 1-30 characters, got ${trimmed.length}`);
}
if (trimmed.split(/\s+/).length !== 1) {
  throw new Error("entry must be exactly one word");
}
if (/[\n\r]/.test(WORD)) {
  throw new Error("entry must not contain a newline");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), trimmed + "\n", "utf8");
