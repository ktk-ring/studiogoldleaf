import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/studiogoldleaf',     // 리포지토리 이름과 동일
  assetPrefix: '/studiogoldleaf/', // 리포지토리 이름과 동일
};

export default nextConfig;
