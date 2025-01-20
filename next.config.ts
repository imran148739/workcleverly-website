const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;