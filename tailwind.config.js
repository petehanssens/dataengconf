const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.gray.800'),

          // ...
        }
      }
    }),
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')]
};