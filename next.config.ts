import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Keep file tracing scoped to this app when other lockfiles exist nearby (e.g. parent repo).
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
