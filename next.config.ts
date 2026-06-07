import type { NextConfig } from "next";

// When building inside GitHub Actions, configure for static export to
// GitHub Pages at /<repo>/. Local dev is unaffected.
const isPagesBuild = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = isPagesBuild
  ? {
      output: "export",
      basePath: "/kelipot",
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
