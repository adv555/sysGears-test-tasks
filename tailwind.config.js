const REM_SIZE = 16;
const pxToRem = px => `${px / REM_SIZE}rem`;
const colors = require('./src/styles/colors.json');

module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        Pacifico: 'Pacifico',
        Lobster: 'Lobster',
        Amiri: 'Amiri',
      },
      fontSize: {
        h1: pxToRem(64),
        h2: pxToRem(48),
        h3: pxToRem(36),
        h4: pxToRem(30),
        h5: pxToRem(24),
        h6: pxToRem(20),
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      width: {
        '300px': pxToRem(300),
        '600px': pxToRem(600),
      },
      minWidth: {
        150: pxToRem(150),
      },
      boxShadow: {
        header: '0px 4px 18px rgba(34, 68, 68, 0.15)',
        card: '0 0 15px rgba(0,0,0,.5)',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('@tailwindcss/forms')({
      // strategy: 'base', // only generate global styles
      strategy: 'class', // only generate classes
    }),
  ],
};
