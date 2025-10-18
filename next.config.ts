import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.ts',
  },
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio' : '',
  trailingSlash: true,
};

export default nextConfig;
