module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./src/utils/generateSitemap');
    }

    return config;
  },
};
