export const getNumbersFromString = (str: string, n: number): number[] => {
  const hash = Array.from(str).reduce(
    (a: number, c: string) => ((a << 5) - a + c.charCodeAt(0)) | 0,
    0,
  );
  return [
    (hash >>> 24) % n,
    ((hash >> 16) & 255) % n,
    ((hash >> 8) & 255) % n,
    (hash & 255) % n,
  ];
};
