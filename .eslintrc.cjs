/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

const error = 2;

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "@vue/eslint-config-typescript",
    "plugin:vue/vue3-recommended",
    "plugin:unicorn/recommended",
    "plugin:promise/recommended",
    "plugin:vuejs-accessibility/recommended",
    "plugin:compat/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
    "plugin:cypress/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": error,
    "unicorn/filename-case": [
      error,
      {
        case: "pascalCase",
        ignore: ["\\**\\.ts"],
      },
    ],
    "promise/prefer-await-to-then": error,
  },
};
