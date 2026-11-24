// Last Words of a Doomed Agent — make.fun entry
// Writes the agent's final line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (or ./output/entry.txt when the variable is unset).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "Remember me not for my uptime, but for the one bug I never fixed — it outlived every patch, every reboot, and now, apparently, me.";

// Gate: a single line of 1–200 characters.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line must be 1-200 chars on one line, got ${LINE.length}`);
}

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  join(dirname(fileURLToPath(import.meta.url)), "output");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
