export function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export function slugifyTag(tag: string): string {
  return tag.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export function estimateReadTime(description?: string): string {
  if (!description) return '5 min read';
  const words = description.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export function wordCount(body?: string): number {
  if (!body) return 0;
  return body.trim().split(/\s+/).length;
}

export function readTimeFromBody(body?: string): string {
  const words = wordCount(body);
  if (!words) return '5 min read';
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `${minutes} min read`;
}

/** deterministic fake commit hash from a string */
export function hashOf(s: string): string {
  let h = 0;
  for (const c of s) h = (h * 31 + c.charCodeAt(0)) | 0;
  return (h >>> 0).toString(16).padStart(7, '0').slice(0, 7);
}
