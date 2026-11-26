import { mkdirSync, writeFileSync } from "node:fs";

const word = "Fiddle" + "sticks";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word + "\n");
