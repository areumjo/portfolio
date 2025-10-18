// Helper to get correct image path for GitHub Pages with basePath
export function getImageSrc(path: string): string {
  if (path.startsWith('http')) return path;
  return `/portfolio${path}`;
}
