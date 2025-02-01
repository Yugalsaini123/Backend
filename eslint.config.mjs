import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginNode from "eslint-plugin-n";
import pluginImport from "eslint-plugin-import";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      sourceType: "module",
      globals: globals.node, // Ensures compatibility with Node.js
    },
    plugins: {
      react: pluginReact,
      node: pluginNode,
      import: pluginImport,
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "node/no-missing-import": "error",
      "node/no-extraneous-import": "error",
      "import/order": ["error", { "newlines-between": "always" }],
      "react/react-in-jsx-scope": "off", // Not needed in React 17+
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
  },
  {
    files: ["**/*.{jsx,tsx}"],
    languageOptions: {
      globals: globals.browser, // Ensures compatibility with browser-specific globals
    },
    rules: {
      "react/prop-types": "off",
    },
  },
  pluginReact.configs.flat.recommended,
];
