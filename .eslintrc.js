// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:mdx/recommended",
    "prettier",
  ],
  settings: {
    "mdx/code-blocks": true,
    // optional, if you want to disable language mapper, set it to `false`
    // if you want to override the default language mapper inside, you can provide your own
    "mdx/language-mapper": {},
    react: {
      version: "detect",
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "max-len": ["warn", { code: 108 }],
    semi: 0,
    "comma-dangle": ["warn", "always-multiline"],
    "prettier/prettier": [
      "warn",
      {
        tabWidth: 2,
      },
    ],
  },
};
