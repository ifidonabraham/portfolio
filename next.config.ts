import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.resolve(process.cwd()),
  transpilePackages: ["three"],
  async rewrites() {
    return [
      {
        source: "/cv",
        destination: "/cv.pdf",
      },
      {
        source: "/resume",
        destination: "/cv.pdf",
      },
    ];
  },
};

export default nextConfig;
