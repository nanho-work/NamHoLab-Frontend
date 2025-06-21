import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // ✅ GitHub Pages에서 safer routing
  images: {
    unoptimized: true,
  },
  basePath: "/NamHoLab-Frontend",
  assetPrefix: "/NamHoLab-Frontend",
};

export default nextConfig;