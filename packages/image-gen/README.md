# image-gen

AI image generation using Google Gemini with style presets.

## Setup

```bash
bun install
bun link
```

Requires `GOOGLE_AI_API_KEY` environment variable.

## CLI

```bash
image-gen "Moses parting the Red Sea" --preset christianai
image-gen "React hooks tutorial" --preset tech-blog
image-gen "King David portrait" --preset christianai --type figure
image-gen "Cloud architecture" --aspect 4:3 --name arch-01 --output ./images
```

### Options

| Flag | Description | Default |
|------|-------------|---------|
| `--preset, -p` | Style preset: `christianai`, `tech-blog` | none |
| `--type, -t` | `blog` (16:9) or `figure` (1:1) | `blog` |
| `--aspect, -a` | Custom aspect ratio (e.g. `4:3`, `9:16`) | from type |
| `--name, -n` | Output filename (no extension) | `{type}-{timestamp}` |
| `--output, -o` | Output directory | `./output/` |

## Library

```bash
# In any project
bun link image-gen
```

```ts
import { generateImage } from "image-gen";

const result = await generateImage({
  prompt: "Moses parting the Red Sea",
  preset: "christianai",
});

result.filepath;   // absolute path to saved image
result.buffer;     // raw image Buffer
result.mimeType;   // "image/png"
result.modelText;  // optional text from the model
```

### Custom system prompt

```ts
await generateImage({
  prompt: "A sunset",
  systemPrompt: "Your custom style instructions here...",
});
```

## Presets

- **christianai** — Reverent, painterly biblical imagery with subtle tech elements
- **tech-blog** — Clean, modern, professional tech illustrations
