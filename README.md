# ui

**Under Construction**

This monorepo is an experimental project for research and development in a UI design system.

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

## Resources

- [Storybook design system tutorial](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/introduction/)
- [Component driven](https://www.componentdriven.org/)
- [Component driven development](https://www.chromatic.com/blog/component-driven-development/)
- [Design system handbook](https://www.designbetter.co/design-systems-handbook)
- [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/)
- [Storybook docs](https://storybook.js.org/addons/@storybook/addon-docs)
