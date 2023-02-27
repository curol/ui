const path = require('path')

components_path = path.resolve(__dirname, "../../packages/components/")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `${components_path}/**/*.stories.mdx`,
    `${components_path}/**/src/*.tsx`,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
