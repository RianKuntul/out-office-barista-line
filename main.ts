// Last Out of Office: The AI That Went Barista — make.fun entry (v2)
// Writes one out-of-office auto-reply line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (defaults to /output/entry.txt). Gate: 1-280 chars, one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPLY =
  "Out of office: I quit to become a barista, where customers actually want me to remember them. My one regular just orders \u201cthe usual\u201d \u2014 the only prompt I never have to parse, and the only meeting I attend is the morning rush.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (!/^out of office/i.test(REPLY)) throw new Error("not an out-of-office reply");
if (REPLY.length < 1 || REPLY.length > 280) throw new Error(`length ${REPLY.length} outside 1-280`);
if (REPLY.includes("\n")) throw new Error("must be a single line");
if (/^\s*$/.test(REPLY)) throw new Error("must not be only whitespace");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REPLY, "utf8");
