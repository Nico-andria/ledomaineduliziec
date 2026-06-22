/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Si tu passes aux <Image> de Next.js avec les URLs Stitch (lh3.googleusercontent.com),
  // décommente ce bloc. Avec tes propres images dans /public, ce n'est pas nécessaire.
  // images: {
  //   remotePatterns: [{ protocol: "https", hostname: "lh3.googleusercontent.com" }],
  // },
};

module.exports = nextConfig;
