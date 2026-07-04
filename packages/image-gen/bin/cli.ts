#!/usr/bin/env bun
import { generateImage } from "../src";
import type { AspectRatio, ImageType } from "../src/types";
import { presets } from "../src/presets";

const args = process.argv.slice(2);

if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
  console.log(`Usage: image-gen <prompt> [options]

Options:
  --type, -t      Image type: blog (16:9) or figure (1:1). Default: blog
  --aspect, -a    Custom aspect ratio: 1:1, 16:9, 9:16, 4:3, 3:4, 3:2, 2:3, 4:5, 5:4, 21:9
  --name, -n      Output filename (without extension)
  --output, -o    Output directory
  --preset, -p    Style preset: ${Object.keys(presets).join(", ")}

Examples:
  image-gen "Moses parting the Red Sea" --preset christianai
  image-gen "React hooks diagram" --preset tech-blog --type blog
  image-gen "King David portrait" --preset christianai --type figure
  image-gen "Cloud architecture" --aspect 4:3 --name arch-01
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
let preset: string | undefined;

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === "--type" || arg === "-t") {
    const val = args[++i];
    if (!VALID_TYPES.includes(val as ImageType)) {
      console.error(`Invalid type "${val}". Must be: ${VALID_TYPES.join(", ")}`);
      process.exit(1);
    }
    type = val as ImageType;
  } else if (arg === "--aspect" || arg === "-a") {
    const val = args[++i];
    if (!VALID_ASPECTS.includes(val as AspectRatio)) {
      console.error(`Invalid aspect ratio "${val}". Must be: ${VALID_ASPECTS.join(", ")}`);
      process.exit(1);
    }
    aspectRatio = val as AspectRatio;
  } else if (arg === "--name" || arg === "-n") {
    outputName = args[++i];
  } else if (arg === "--output" || arg === "-o") {
    outputDir = args[++i];
  } else if (arg === "--preset" || arg === "-p") {
    preset = args[++i];
  } else if (!arg.startsWith("-")) {
    promptParts.push(arg);
  }
}

const prompt = promptParts.join(" ");

if (!prompt) {
  console.error("Error: prompt is required");
  process.exit(1);
}

console.log(`Generating ${type} image (${aspectRatio ?? "default"})...`);
if (preset) console.log(`Preset: ${preset}`);
console.log(`Prompt: ${prompt}\n`);

try {
  const result = await generateImage({
    prompt,
    type,
    aspectRatio,
    outputName,
    outputDir,
    preset,
  });
  console.log(`Image saved: ${result.filepath}`);
  if (result.modelText) console.log(`Model response: ${result.modelText}`);
} catch (err) {
  console.error("Error generating image:", err);
  process.exit(1);
}
