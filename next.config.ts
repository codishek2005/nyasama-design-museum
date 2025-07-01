import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true
    },
    publicRuntimeConfig: {
        title: "NyaSama Design Museum",
        description: "NyaSama Forum Historical Design Archive",
    },
};

export default nextConfig;
