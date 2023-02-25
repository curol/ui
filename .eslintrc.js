module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-ui`
  extends: ["ui"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
