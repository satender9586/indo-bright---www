const withMDX = require("@next/mdx")();
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = withMDX(nextConfig);
