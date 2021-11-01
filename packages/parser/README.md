# `@html-eslint/parser`

[![npm version](https://badge.fury.io/js/@html-eslint%2Fparser.svg)](https://badge.fury.io/js/@html-eslint%2Fparser)

Parser for `@html-eslint/plugin`.

This project contains code forked from [parse5](https://github.com/inikulin/parse5). Some codes were transformed for generating suitable AST for `@html-eslint/plugin`.

## Installation

```
npm install -D @html-eslint/parser @html-eslint/eslint-plugin
```

## Configuration

- .eslintrc.js

```js
module.exports = {
  //...
  plugins: ["@html-eslint"],
  overrides: [
    {
      files: ["*.html"],
      parser: "@html-eslint/parser",
      extends: ["plugin:@html-eslint/recommended"],
    },
  ],
};

```
