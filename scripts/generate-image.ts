#!/usr/bin/env bun
import { generateImage } from "image-gen";
import type { AspectRatio, ImageType } from "image-gen";
import { systemPrompt } from "./image-prompt";

const args = process.argv.slice(2);

if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
  console.log(`Usage: bun run gen:image <prompt> [options]

Generates AI images for the portfolio using the site's visual style.

Options:
  --type, -t      Image type: blog (16:9) or figure (1:1). Default: blog
  --aspect, -a    Custom aspect ratio: 1:1, 16:9, 9:16, 4:3, 3:4, 3:2, 2:3, 4:5, 5:4, 21:9
  --name, -n      Output filename (without extension)
  --output, -o    Output directory. Default: current directory

Examples:
  bun run gen:image "React hooks explained visually" --name header
  bun run gen:image "Hero banner with abstract code" --type blog --output ./src/content/blog/my-post
  bun run gen:image "Square icon for project card" --type figure --name icon
`);
  process.exit(0);
}

const VALID_TYPES = ["blog", "figure"] as const;
const VALID_ASPECTS = ["1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "4:5", "5:4", "21:9"] as const;

const promptParts: string[] = [];
let type: ImageType = "blog";
let aspectRatio: AspectRatio | undefined;
let outputName: string | undefined;
let outputDir: string | undefined;

function requireValue(flag: string, index: number): string {
  const val = args[index];
  if (val === undefined || val.startsWith("-")) {
    console.error(`Option ${flag} requires a value`);
    process.exit(1);
  }
  return val;
}

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === "--type" || arg === "-t") {
    const val = requireValue(arg, ++i);
    if (!VALID_TYPES.includes(val as ImageType)) {
      console.error(`Invalid type "${val}". Must be: ${VALID_TYPES.join(", ")}`);
      process.exit(1);
    }
    type = val as ImageType;
  } else if (arg === "--aspect" || arg === "-a") {
    const val = requireValue(arg, ++i);
    if (!VALID_ASPECTS.includes(val as AspectRatio)) {
      console.error(`Invalid aspect ratio "${val}". Must be: ${VALID_ASPECTS.join(", ")}`);
      process.exit(1);
    }
    aspectRatio = val as AspectRatio;
  } else if (arg === "--name" || arg === "-n") {
    outputName = requireValue(arg, ++i);
  } else if (arg === "--output" || arg === "-o") {
    outputDir = requireValue(arg, ++i);
  } else if (arg.startsWith("-")) {
    console.error(`Unknown option: ${arg}`);
    process.exit(1);
  } else {
    promptParts.push(arg);
  }
}

const prompt = promptParts.join(" ");

if (!prompt) {
  console.error("Error: prompt is required");
  process.exit(1);
}

console.log(`Generating ${type} image (${aspectRatio ?? "default"})...`);
console.log(`Prompt: ${prompt}\n`);

try {
  const result = await generateImage({
    prompt,
    type,
    aspectRatio,
    outputName,
    outputDir: outputDir ?? ".",
    systemPrompt,
  });
  console.log(`Image saved: ${result.filepath}`);
  if (result.modelText) console.log(`Model notes: ${result.modelText}`);
} catch (err) {
  console.error("Error generating image:", err);
  process.exit(1);
}
