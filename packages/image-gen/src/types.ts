export type AspectRatio =
  | "1:1"
  | "16:9"
  | "9:16"
  | "4:3"
  | "3:4"
  | "3:2"
  | "2:3"
  | "4:5"
  | "5:4"
  | "21:9";

export type ImageType = "blog" | "figure";

export const ASPECT_PRESETS: Record<ImageType, AspectRatio> = {
  blog: "16:9",
  figure: "1:1",
};

export interface GenerateImageOptions {
  prompt: string;
  type?: ImageType;
  aspectRatio?: AspectRatio;
  outputName?: string;
  outputDir?: string;
  apiKey?: string;
  preset?: string;
  systemPrompt?: string;
}

export interface GenerateImageResult {
  filepath: string;
  buffer: Buffer;
  mimeType: string;
  modelText?: string;
}
