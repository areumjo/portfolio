// Helper function to get the correct image path with basePath
export function getImagePath(src: string): string {
  // For external URLs, return as-is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  // For local images in production, prepend basePath
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  return `${basePath}${src}`;
}
