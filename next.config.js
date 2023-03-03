/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     appDir: true,
    // },
    reactStrictMode: false,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ["images.microcms-assets.io"],
    },
    env: {
        API_KEY: "4af395f8-f929-426a-b0e2-05112403698a",
    },
};

module.exports = nextConfig;
