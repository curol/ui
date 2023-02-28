const baseConfig = require("./tailwind-base.config")

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseConfig,
  content: [...baseConfig.content, "content/**/*.mdx"],
}
