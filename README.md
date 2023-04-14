# ui

**Under Construction**

This monorepo is an experimental project for research and development in a UI design system.

This project was bootstrapped with the template [Turborepo Design System Starter](https://github.com/vercel/turbo/tree/main/examples/design-system).

For more information on UI design systems, see [introduction to design systems](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/introduction/).


## Why

A UI design system codifies existing UI components into a central repository.
It is built to address having to paste the same components into multiple projects again and again.

## Stack

- 🫙 [Devcontainer](https://code.visualstudio.com/docs/devcontainers/containers) - Develop inside a dev container using the file `.devcontainer/devcontainer.json` in Visual Studio Code.
- 🏎 [Turborepo](https://turbo.build/repo) — High-performance build system for Monorepos
- 🚀 [React](https://reactjs.org/) — JavaScript library for user interfaces
- 🛠 [Tsup](https://github.com/egoist/tsup) — TypeScript bundler powered by esbuild
- 📖 [Storybook](https://storybook.js.org/) — UI component environment powered by Vite
- 🤘 [TypeScript](https://www.typescriptlang.org/) for static type checking
- 🧻 [ESLint](https://eslint.org/) for code linting
- 💅 [Prettier](https://prettier.io) for code formatting
- 🤬 [Changesets](https://github.com/changesets/changesets) for managing versioning and changelogs
- 🤖 [GitHub Actions](https://github.com/changesets/action) for fully automated package publishing

## Useful Commands

- `pnpm build` - Build all packages, including the Storybook site
- `pnpm dev` - Run all packages locally and preview with Storybook
- `pnpm lint` - Lint all packages
- `pnpm changeset` - Generate a changeset
- `pnpm clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

## Versioning & Publishing Packages

This example uses [Changesets](https://github.com/changesets/changesets) to manage versions, create changelogs, and publish to npm. It's preconfigured so you can start publishing packages immediately.

You'll need to create an `NPM_TOKEN` and `GITHUB_TOKEN` and add it to your GitHub repository settings to enable access to npm. It's also worth installing the [Changesets bot](https://github.com/apps/changeset-bot) on your repository.

### Generating the Changelog

To generate your changelog, run `pnpm changeset` locally:

1. **Which packages would you like to include?** – This shows which packages and changed and which have remained the same. By default, no packages are included. Press `space` to select the packages you want to include in the `changeset`.
1. **Which packages should have a major bump?** – Press `space` to select the packages you want to bump versions for.
1. If doing the first major version, confirm you want to release.
1. Write a summary for the changes.
1. Confirm the changeset looks as expected.
1. A new Markdown file will be created in the `changeset` folder with the summary and a list of the packages included.

### Releasing

When you push your code to GitHub, the [GitHub Action](https://github.com/changesets/action) will run the `release` script defined in the root `package.json`:

```bash
turbo run build --filter=docs^... && changeset publish
```

Turborepo runs the `build` script for all publishable packages (excluding docs) and publishes the packages to npm. By default, this example includes `acme` as the npm organization. To change this, do the following:

- Rename folders in `packages/*` to replace `acme` with your desired scope
- Search and replace `acme` with your desired scope
- Re-run `pnpm install`

To publish packages to a private npm organization scope, **remove** the following from each of the `package.json`'s

```diff
- "publishConfig": {
-  "access": "public"
- },
```

## Vercel config

Project '@curol/docs' is deployed to the platform vercel. `apps/docs/vercel.json` contains the config for deployment. For storybook static site, use

```json
{
  "outputDirectory": "storybook-static"
}
```

## Resources

- [Storybook design system tutorial](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/introduction/)
- [Component driven](https://www.componentdriven.org/)
- [Component driven development](https://www.chromatic.com/blog/component-driven-development/)
- [Design system handbook](https://www.designbetter.co/design-systems-handbook)
- [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/)
- [Storybook docs](https://storybook.js.org/addons/@storybook/addon-docs)
