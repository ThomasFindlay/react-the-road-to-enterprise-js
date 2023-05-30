/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  plugins: [
    require('stylelint')({
      configFile: 'stylelint.config.js',
    }),
    require('postcss-flexbugs-fixes'),
    require('postcss-import'),
    require('postcss-extend'),
    // Comment out postcss-nested if you're using tailwindcss/nesting
    // require("postcss-nested"),
    require('tailwindcss/nesting'),
    require('tailwindcss')('tailwind.config.js'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
        'nesting-rules': false,
      },
    }),
    require('autoprefixer')(),
    require('postcss-reporter'),
  ],
}
