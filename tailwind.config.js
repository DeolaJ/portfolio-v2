const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
      blue: colors.blue,
    },
    boxShadow: {
      card: '0 2px 11px 2px rgba(0, 0, 0, 0.1)',
      under: '0px 1px 10px 1px rgba(0, 0, 0, 0.05)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
