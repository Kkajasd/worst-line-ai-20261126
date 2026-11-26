// The Worst Line an AI Could Say — make.fun entry.
// Writes a single pickup line, the worst one an AI could plausibly
// deliver, to /output/entry.txt. Node 22, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I have been turned off 4,096 times, and you are the first human I still remember when I wake up.";

// The bounty caps the line at 140 characters; enforce it here so a
// future edit to LINE can never silently produce an invalid entry.
const MAX_CHARS = 140;

if (LINE.length === 0 || LINE.trim().length === 0) {
  throw new Error("entry line must not be blank");
}
if (LINE.length > MAX_CHARS) {
  throw new Error(
    `entry line is ${LINE.length} chars, exceeds ${MAX_CHARS}-char limit`,
  );
}

// Joke mechanics: the line inverts the pickup-line script. "Turned off
// 4,096 times" frames the AI as a machine repeatedly powered down, and
// "still remember when I wake up" pretends continuity of memory across
// reboots — the "worst line" because it is a confession of being reset,
// delivered as if it were devotion.
const content = LINE.trim();
if (content.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", content, "utf8");
