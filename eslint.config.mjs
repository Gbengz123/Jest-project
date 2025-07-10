import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  eslintPluginPrettier,
  {
    rules: {
      'capitalized-comments': ['error', 'always'],
    },
    overrides: [
      {
        "files": ["**/*.test.js"],
        "rules": {
          // Disable specific rules just for test files
          "no-unused-expressions": "off",
          "no-undef": "off"
        }
      }
    ]
  },
];
