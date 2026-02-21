# Image Generation

This project uses the [`image-gen`](../../tasks/image-gen/) module for AI-powered image generation via Google Gemini, with a portfolio-specific system prompt defined locally in `scripts/image-prompt.ts`.

## Setup

```bash
cd ~/src/tasks/image-gen && bun link
cd ~/src/personal/profile && bun link image-gen
```

Requires `GOOGLE_AI_API_KEY` environment variable.

## Usage

```bash
# Blog header image (16:9)
bun run gen:image "React hooks explained visually" --name header

# Save directly into a blog post directory
bun run gen:image "Abstract code flow" --output ./src/content/blog/my-post --name header

# Square image for cards/avatars (1:1)
bun run gen:image "JavaScript concept icon" --type figure --name icon

# Custom aspect ratio
bun run gen:image "Wide banner" --aspect 21:9 --name banner
```

## Options

| Flag | Description | Default |
|------|-------------|---------|
| `--type, -t` | `blog` (16:9) or `figure` (1:1) | `blog` |
| `--aspect, -a` | Custom aspect ratio | from type |
| `--name, -n` | Output filename (no extension) | `{type}-{timestamp}` |
| `--output, -o` | Output directory | `.` (current dir) |

## System Prompt

The portfolio's visual style is defined in `scripts/image-prompt.ts`. Edit this file to adjust the aesthetic. The prompt is passed directly to `generateImage()` via the `systemPrompt` option — no preset registration needed in the image-gen module.

## Other Presets

The image-gen CLI also supports `--preset` for other projects:
- `tech-blog` — generic tech blog style
- `christianai` — biblical/reverent imagery

These can be used directly via `bunx image-gen "prompt" --preset tech-blog`.
