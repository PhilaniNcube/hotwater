module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/sitemap-generator');
    }
    return config;
  },
  images: {
    domains: [
      'tqindzrnxqulmtsuoqaz.supabase.in',
      'tuk-cdn.s3.amazonaws.com',
      'images.ctfassets.net',
      'bit.ly',
    ],
  },
};
