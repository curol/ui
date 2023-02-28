const path = require('path')

components_path = path.resolve(__dirname, "../../packages/components/")

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Paths are relative to your project root, not your tailwind.config.js file, so if your tailwind.config.js file is in a custom location, you should still write your paths relative to the root of your project.
  content: [
    `${components_path}/**/src/**/*.stories.mdx`,
    `${components_path}/**/src/**/*.{tsx,ts}`,
  ],
  jit: true,
  theme: {
    extend: {},
  },
  plugins: [
    require("@curol/tailwind")
  ],
}
