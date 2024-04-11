// const nextConfig = {
//   images: ["lh3.googleusercontent.com"],
// };

// module.exports = nextConfig;

// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: [
//       "lh3.googleusercontent.com",
//       "https://firebasestorage.googleapis.com",
//     ],
//   },
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
