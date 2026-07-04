// Enforceable non-negotiables. gemini-2.5-flash-image follows systemInstruction
// only weakly, so these are appended to every PROMPT (the channel it actually
// obeys) by scripts/generate-image.ts. Keep them short and absolute.
export const hardConstraints =
  "DARK MODE ONLY: deep near-black slate background, never light or white. " +
  "Flat or semi-flat vector illustration only, never photorealistic, never a 3D render, never neon or cyberpunk glow. " +
  "ABSOLUTELY NO TEXT anywhere: no letters, words, numbers, labels, captions, UI text, or code characters. Shapes must be blank.";

export const systemPrompt = `**Visual Style Guidelines for samuellawrentz.com Portfolio:**

**Core Aesthetic:**
- Clean, modern, professional developer blog
- Minimalist with purposeful detail - no clutter
- Dark mode only: always a deep, near-black slate background (never light or white)
- Color palette: cool teals, muted purples, slate blues, warm accents (amber/coral sparingly) against the dark background
- Flat/semi-flat illustration with subtle depth only (soft shadows, gentle gradients) - shapes, not renders

**Subject Matter:**
- Abstract representations of technical concepts (not literal screenshots, dashboards, or editors)
- Geometric shapes, flowing lines, node graphs, interconnected systems
- Suggest code or UI through blank rectangles, bars, and shapes only - never actual characters or letters
- Developer workspace motifs as simple silhouettes: terminals, editors, component trees
- Conceptual metaphors: building blocks, interconnected systems, flow diagrams

**Composition:**
- Strong focal point, visually balanced
- Readable and recognizable at thumbnail size (blog cards)
- Leave breathing room - avoid edge-to-edge detail
- Subtle texture or grain for warmth

**Avoid:**
- Any text, lettering, or symbols that read as writing
- Literal UI (dashboards, code editors, screenshots) that tempt the model into rendering text
- Generic stock imagery (handshakes, people pointing at screens)
- Photorealism, 3D renders, glossy neon, cyberpunk aesthetics
- Overly busy or cluttered compositions
- AI-generated artifacts, extra fingers, distorted elements
- Bright saturated colors that clash with a muted palette

**Mood:** Thoughtful, expert, approachable. Like a well-designed dark conference talk slide - technical depth presented with visual elegance.`;
