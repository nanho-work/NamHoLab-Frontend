import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // ✅ GitHub Pages에서 safer routing
  images: {
    unoptimized: true,
  },
};

export default nextConfig;