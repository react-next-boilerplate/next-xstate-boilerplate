/** @type {import('next').NextConfig} */

const isEnabledMswMocking = process.env.NEXT_PUBLIC_MSW_MOCKING === "enabled";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      isEnabledMswMocking && {
        // Append the "Service-Worker-Allowed" header
        // to each response, overriding the default worker's scope.
        source: "/(.*)",
        headers: [
          {
            key: "Service-Worker-Allowed",
            value: "/",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
