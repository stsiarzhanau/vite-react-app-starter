module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['@stsiarzhanau/nextjs-typescript/core'],
  ignorePatterns: ['dist', '*.cjs'],
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
  parserOptions: {
    project: ['./tsconfig.app.json', './tsconfig.node.json'],
  },
  settings: {
    /**
     * Vite serves files in the public directory at the root URL. For example,
     * if you have a file at public/vite.svg, it can be accessed at /vite.svg
     * in the browser. These files are not processed by Vite’s module bundler
     * and are simply copied to the output directory as-is.
     *
     * ESLint, particularly when configured with plugins like eslint-plugin-import,
     * expects all imports to be resolvable within the project's module system
     * (i.e., through node modules or relative paths). When you try to import
     * assets using a path that ESLint doesn’t recognize as valid
     * (e.g., '/vite.svg'), it raises an error because it doesn't understand
     * that these paths are served by Vite.
     *
     * We can use a eslint-import-resolver-alias plugin to create a custom alias
     * for the public directory. First install the resolver:
     *
     *    npm install eslint-import-resolver-alias --save-dev
     *
     * And then configure ESLint to use the resolver:
     */
    'import/resolver': {
      alias: {
        map: [['', './public']],
        extensions: ['.ts', '.tsx'],
      },
    },
  },
};
