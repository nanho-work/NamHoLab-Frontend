import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // ✅ GitHub Pages에서 safer routing
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/NamHoLab-Frontend" : "",
  assetPrefix: isProd ? "/NamHoLab-Frontend" : "",
};

export default nextConfig;