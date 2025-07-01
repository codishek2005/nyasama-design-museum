import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true
    },
    publicRuntimeConfig: {
        title: "NyaSama Design Museum",
        description: "A Screen Collection of NyaSama Design",
    },
};

export default nextConfig;
