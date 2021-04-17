const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        artgrid: 'repeat(auto-fill, 220px)',
        artgridMd: 'repeat(auto-fill, 260px)',
        artgridLg: 'repeat(auto-fill, 300px)',
      },
      boxShadow: {
        card: '0 2px 11px 2px rgba(0, 0, 0, 0.1)',
        under: '0px 1px 10px 1px rgba(0, 0, 0, 0.05)',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      white: colors.white,
      indigo: colors.indigo,
      blue: colors.blue,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
