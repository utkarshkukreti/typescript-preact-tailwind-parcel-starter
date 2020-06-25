module.exports = {
  purge: process.env.PURGE === 'true' ? ['src/**/*'] : false,
  theme: {
    extend: {
      fontFamily: {
        sans: '"Trebuchet MS", sans-serif',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')],
};
