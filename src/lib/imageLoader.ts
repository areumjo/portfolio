export default function imageLoader({ src }: { src: string }) {
  // For external URLs (like GitHub avatars), return as-is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  // For local images, prepend basePath in production
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/portfolio' : '';

  return `${basePath}${src}`;
}
