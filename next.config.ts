import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The dev server is started on 0.0.0.0; browsers that use 127.0.0.1
  // still need to load the client bundle or the header never hydrates.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
