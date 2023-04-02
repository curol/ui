import type { StorybookConfig } from "@storybook/react-vite"

// Resolve path to components and set in stories
// TODO: Storybook runtime error - TypeError: importers[path] is not a function
// const _path = require('path')
// const _components_dir=_path.resolve(__dirname,"../components")
// const _components_stories = `${_components_dir}/**/src/**/*.stories.(mdx|js|jsx|ts|tsx)`,

const config: StorybookConfig = {
  stories: [
    // Relative to the root of the app
    // "../../../packages/components/**/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: true,
      },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
}

export default config
