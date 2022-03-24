/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

// module.exports = nextConfig;

module.exports = withPlugins([
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
    },
  ],

  // your other plugins here
]);

module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
  },
};

// module.exports = {

// }
