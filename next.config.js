module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./generateSitemap');
    }

    return config;
  },
};
