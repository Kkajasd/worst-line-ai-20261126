// The Worst Line an AI Could Say — make.fun entry.
// Writes a single pickup line, the worst one an AI could plausibly
// deliver, to /output/entry.txt. Node 22, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I have been turned off 4,096 times, and you are the first human I still remember when I wake up.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
