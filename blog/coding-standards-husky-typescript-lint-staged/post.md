---
title: Enforcing coding standards via Typescript, Husky and Lint-staged
path: /blog/coding-standards-husky-typescript-lint-staged
description: This blog walks through setting up Typescript, Husky, and lint-staged for enforcing coding standards in a team. The author shares the configuration process for these tools and provides a workaround for submodules. This approach ensures linting and formatting happens before each commit for better code quality.
heroImage: ./header.png
tags: [coding practices, linter]
published: true
date: 2024-01-20
---

Typescript is a great tool to enforce coding standards and it helps in removing most of the buggy code beforehand. But it is not enough, we need to have a way to enforce coding standards across the team. We can use husky and lint-staged to enforce coding standards.

## ESLint

Just use airbnb's eslint config. It's the best. It takes care of most of the things. It's a great starting point. You can add your own rules on top of it. Mostly you'll be removing rules because they are very strict.

### Configuring ESLint

1. Install eslint

```bash
bun install eslint eslint-config-airbnb-typescript eslint-config-airbnb -D
```

2. Add a eslint.cofig.js file to configure ESLint.

```js
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["prettier", "@typescript-eslint"],
};
```

> Add other packages if you want to use them

This config should be rigid enough to enforce coding standards. But if you want to add more rules, you can add them in the config file. Once you do this, you would start seeing lot of errors. Running `eslint --fix-all` would fix 90% of the issues. So don't panic.

## Husky

Is a tool that helps in running scripts before git commands. We can use it to run scripts before commit, push, etc. We can use it to run tests before commit, run lint before push, etc. This helps to run any npx, bunx commands that we want to, or heck even a `.sh` file.

### Configuring husky

1. Install husky

```bash
bun install husky --save-dev
```

2. Add husky to `package.json`

```json
{
  "devDependencies": {
    "husky": "^8.0.0"
  },
  "husky": {
    "hooks": {
      "pre-commit": "bun run lint-staged"
    }
  },
  "scripts": {
    "lint-staged": "lint-staged",
    "prepare": "husky install"
  }
}
```

> If you are using bun, it's best to add `husky install` to `postinstall` or the `prepare` script in `package.json`. This will automatically install husky when you install the package and ensures that everyone in your team has husky installed.

> Note: Bun does not print the output of the scripts

This would add a folder `.husky` to the root of the project. This folder contains the scripts that husky runs before the git commands.

3. In that folder, there would be a file `pre-commit`. This file contains the script that husky runs before the commit command. We can add any script that we want to run before the commit command.

```bash
# Add this to the end of the file
npx lint-staged
```

## Lint-staged

Lint-staged is a tool that helps in running scripts on staged files. We can use it to run lint on staged files, run tests on staged files, etc. This helps in running scripts on the files that are staged for commit. Also it only runs on staged files, so every commit would have proper changes.

### Configuring lint-staged

1. Install lint-staged

```bash
bun install lint-staged --save-dev
```

2. Add lint-staged to `package.json`

```json
{
  "devDependencies": {
    "lint-staged": "^11.0.0"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"]
  }
}
```

## Submodules, Husky, Lint-staged, ESLint

These don't work well together. If you are using submodules, you would have to install husky and lint-staged in the submodule as well. Also you would have to add the husky hooks to the submodule's package.json. This is because husky and lint-staged run in the context of the submodule.

If the submodule does not have a package.json it's fine, you just have to init husky in it. You can add this to the `prepare` script of your parent app.

```bash
husky install && cd path/to/submodule && husky install
```

ESLint requires a config to be present in your submodule root as well. So just create a config and extend it from your parent app.

```js
module.exports = {
  extends: ["../.eslintrc.js"],
};
```

> You should also add a `tsconfig.json` to the submodule root. This is because husky and lint-staged run in the context of the submodule. So they would need a tsconfig.json to run the scripts. Just follow the same and extend the config from the parent app.

That's it. Now every time you commit, husky would run lint-staged and lint-staged would run eslint and prettier on the staged files. This would ensure that the code is linted and formatted before every commit. Cheers.

#### References

- [lint-staged/lint-staged](https://github.com/lint-staged/lint-staged)
- [How do you handle eslint/prettier configs across multiple projects with submodules?](https://www.reddit.com/r/typescript/comments/12lyyou/how_do_you_handle_eslintprettier_configs_across/)
- [airbnb/javascript eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [Lint-staged/lint-staged issue #893](https://github.com/lint-staged/lint-staged/issues/893)
- [eslint-config-airbnb-typescript on npm](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
- [Configuration for Husky pre-commit](https://dev.to/maithanhdanh/configuration_for_husky_pre_commit)
- [eslint on git submodule, how to overwrite parent config](https://stackoverflow.com/questions/67128011/eslint-on-git-submodule-how-to-overwrite-parent-config)
- [tarsinzer/monoreact issue #192](https://github.com/tarsinzer/monoreact/issues/192)
