# packages

## Notes

### Modules: Packages

> A package is a folder tree described by a package.json file. The package consists of the folder containing the package.json file and all subfolders until the next folder containing another package.json file, or a folder named node_modules. See [Node.js - Modules:Packages](https://nodejs.org/api/packages.html#modules-packages).

#### Module system

- [Determing module system](https://nodejs.org/api/packages.html#determining-module-system)

- Node.js has two systems for loading modules:

  - CommonJS module loader
  - ECMAScript module loader

- Package entry points:

  - Within a package, the package.json "type" field defines how Node.js should interpret .js files. If a package.json file does not have a "type" field, .js files are treated as CommonJS.

  - A package.json "type" value of "module" tells Node.js to interpret .js files within that package as using ES module syntax.

  - The "type" field applies not only to initial entry points (node my-app.js) but also to files referenced by import statements and import() expressions.

- [Conditional exports](https://nodejs.org/docs/latest-v18.x/api/packages.html#conditional-exports): Conditional exports provide a way to map to different paths depending on certain conditions. They are supported for both CommonJS and ES module imports.

  For example, a package that wants to provide different ES module exports for require() and import can be written:

  ```js
  // package.json
  {
    "exports": {
      "import": "./index-module.js",
      "require": "./index-require.cjs"
    },
    "type": "module"
  }
  ```
