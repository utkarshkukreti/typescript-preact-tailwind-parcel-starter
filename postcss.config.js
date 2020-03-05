const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['src/**/*.{html,js,ml}'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.PURGE === 'true' ? [purgecss] : []),
  ],
};
