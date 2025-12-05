# @mi11er/eslint-config

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3f9bcb5d38f24b4983e8972f12941575)](https://app.codacy.com/app/mi11er/eslint-config?utm_source=github.com&utm_medium=referral&utm_content=mi11er-net/eslint-config&utm_campaign=badger)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/mi11er-net/eslint-config/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/mi11er-net/eslint-config/tree/master)

Combines various plugins and rulesets for use in mi11er.net projects.

## Installation

Note: don't forget the required peerDependencies.

```shell
npm install --save-dev eslint @mi11er/eslint-config eslint-plugin-optimize-regex eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-security eslint-plugin-n eslint-plugin-no-unsanitized eslint-plugin-scanjs-rules
```

or

```shell
yarn add -D eslint @mi11er/eslint-config eslint-plugin-optimize-regex eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-security eslint-plugin-n eslint-plugin-no-unsanitized eslint-plugin-scanjs-rules
```

## Setup

Add the config to your `.eslintrc` file:

```json
{
  "extends": "@mi11er"
}
```

or for react/preact based projects

```json
{
  "extends": "@mi11er/eslint-config/react"
}
```
