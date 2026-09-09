import { GoogleGenAI } from "@google/genai";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import { getPreset } from "./presets";
import {
  ASPECT_PRESETS,
  type GenerateImageOptions,
  type GenerateImageResult,
} from "./types";

export async function generateImage(
  options: GenerateImageOptions,
): Promise<GenerateImageResult> {
  const { prompt, type = "blog", outputName } = options;
  const aspectRatio = options.aspectRatio ?? ASPECT_PRESETS[type];

  const apiKey = options.apiKey ?? process.env.GOOGLE_AI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "API key required: pass apiKey option or set GOOGLE_AI_API_KEY env var",
    );
  }

  let systemInstruction: string | undefined;
  if (options.systemPrompt) {
    systemInstruction = options.systemPrompt;
  } else if (options.preset) {
    systemInstruction = getPreset(options.preset);
  }

  const ai = new GoogleGenAI({ apiKey });

  const outputDir =
    options.outputDir ?? join(import.meta.dir, "..", "output");
  await mkdir(outputDir, { recursive: true });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-image",
    contents: prompt,
    config: {
      ...(systemInstruction && { systemInstruction }),
      responseModalities: ["TEXT", "IMAGE"],
      imageConfig: { aspectRatio } as Record<string, unknown>,
    },
  });

  const timestamp = Date.now();
  const baseName = outputName ?? `${type}-${timestamp}`;

  // Collect all parts first — text may come before or after image
  let modelText: string | undefined;
  let imageBuffer: Buffer | undefined;
  let imageMimeType = "image/png";

  for (const part of response.candidates?.[0]?.content?.parts ?? []) {
    if ("text" in part && part.text) {
      modelText = modelText ? `${modelText}\n${part.text}` : part.text;
    } else if ("inlineData" in part && part.inlineData) {
      imageBuffer = Buffer.from(part.inlineData.data as string, "base64");
      imageMimeType = part.inlineData.mimeType ?? "image/png";
    }
  }

  if (!imageBuffer) {
    throw new Error("No image was generated in the response");
  }

  const ext = imageMimeType.split("/")[1] ?? "png";
  const filename = `${baseName}.${ext}`;
  const filepath = join(outputDir, filename);
  await Bun.write(filepath, imageBuffer);

  return { filepath, buffer: imageBuffer, mimeType: imageMimeType, modelText };
}
