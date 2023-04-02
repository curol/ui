
const resolveContentPaths = ()=>{
  //**********************************************
  // Content
  //
  // Paths are relative to your project root, not your tailwind.config.js file.
  // So, if your tailwind.config.js file is in a custom location,
  // you should still write your paths relative to the root of your project.
  //**********************************************

  // const path = require('path')
  // require.resolve('@curol/styles/tailwind')
  // path.resolve(__dirname, '../../node_modules/@curol/styles/tailwind.js')
  // const _components_path = path.resolve(__dirname, "../../packages/components/")

  return [
    './src/**/*.{tsx,ts,mdx}',
    '../../packages/components/**/src/**/*.{tsx,ts,mdx}',
  ]
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...resolveContentPaths()],
  theme: {
    extend: {},
  },
  plugins: [
    require("@curol/tailwind-plugin")
  ],
}
