const path = require("path")

components_path = path.resolve(__dirname, "../../../packages/components/")

module.exports = {
  stories: [
    `${components_path}/**/*.stories.mdx`,
  ],
  addons: [
    "@storybook/addon-links",
    // {
    //   /**
    //    * Fix Storybook issue with PostCSS@8
    //    * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
    //    */
    //   name: '@storybook/addon-postcss',
    //   options: {
    //     postcssLoaderOptions: {
    //       implementation: require('postcss'),
    //     },
    //   },
    // },
    "@storybook/addon-essentials",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "@curol/button",
            replacement: path.resolve(__dirname, "../../../packages/button/"),
          },
        ],
      },
    }
  },
}
