/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const { neutral, brand, brandSecondary, danger, warning, success, background } = require('./client/styles/colors');
const { typography } = require('./client/styles/typography');
const { boxShadow } = require('./client/styles/shadow');

export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        neutral,
        brand,
        brandSecondary,
        danger,
        warning,
        success,
        background,
      },
      fontFamily: {
        sans: typography.fontFamily.sans,
      },
      fontSize: {
        xs: typography.fontSize.xs,
        sm: typography.fontSize.sm,
        base: typography.fontSize.base,
        lg: typography.fontSize.lg,
        xl: typography.fontSize.xl,
        '2xl': typography.fontSize['2xl'],
        '3xl': typography.fontSize['3xl'],
        '4xl': typography.fontSize['4xl'],
        '5xl': typography.fontSize['5xl'],
        '6xl': typography.fontSize['6xl'],
        '7xl': typography.fontSize['7xl'],
      },
      fontWeight: {
        thin: typography.fontWeight.thin,
        light: typography.fontWeight.light,
        normal: typography.fontWeight.normal,
        medium: typography.fontWeight.medium,
        semibold: typography.fontWeight.semibold,
        bold: typography.fontWeight.bold,
        extrabold: typography.fontWeight.extrabold,
        black: typography.fontWeight.black,
      },
      letterSpacing: {
        wide: typography.letterSpacing.wide,
        normal: typography.letterSpacing.normal,
        tightest: typography.letterSpacing.tightest,
      },
      lineHeight: {
        1: typography.lineHeight[1],
        2: typography.lineHeight[2],
        3: typography.lineHeight[3],
        4: typography.lineHeight[4],
        5: typography.lineHeight[5],
        6: typography.lineHeight[6],
        7: typography.lineHeight[7],
        8: typography.lineHeight[8],
        9: typography.lineHeight[9],
        10: typography.lineHeight[10],
        11: typography.lineHeight[11],
      },
      boxShadow: {
        ...boxShadow,
      },
    },
  },
  plugins: [],
};