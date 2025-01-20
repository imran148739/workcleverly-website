const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true, // 301 redirect (set to false for 302)
      },
    ];
  },
};

export default nextConfig;