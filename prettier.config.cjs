/** @type {import("prettier").Config} */
module.exports = {
  trailingComma: 'all',
  arrowParens: 'always',
  singleQuote: true,
  singleAttributePerLine: true,
  printWidth: 100,
  pluginSearchDirs: [__dirname],
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}