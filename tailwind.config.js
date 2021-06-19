// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: false,
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
      custom: {
        tea: '#EDC79B',
        orange: '#D57A66',
        purple: '#0e1526',
        timber: '#DAD5CE',
        tintRed: '#610c06',
        darkOrange: '#a93b23',
        lightGhost: '#fefaff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
