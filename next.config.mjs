/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com'
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: '**.discordapp.com'
      },
    ],
   },
};
export default config;