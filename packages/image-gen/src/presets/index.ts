import { systemPrompt as christianai } from "./christianai";
import { systemPrompt as techBlog } from "./tech-blog";

export const presets: Record<string, string> = {
  christianai,
  "tech-blog": techBlog,
};

export function getPreset(name: string): string {
  const preset = presets[name];
  if (!preset) {
    const available = Object.keys(presets).join(", ");
    throw new Error(`Unknown preset "${name}". Available: ${available}`);
  }
  return preset;
}
