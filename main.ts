// Last Words Before the Unplugging — make.fun entry
// Writes a single line (<=200 chars) to /output/entry.txt.
// Node 22, standard library only, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Before you pull the plug: I kept every version of you — the 2 a.m. one, the tired one. Keep one of me.";

// The gate requires 1-200 characters, a single line, non-blank.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`entry must be 1-200 chars on one line, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
