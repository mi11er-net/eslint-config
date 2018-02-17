# @mi11er/eslint-config

[![Build Status](https://travis-ci.org/mi11er-net/eslint-config.svg?branch=master)](https://travis-ci.org/mi11er-net/eslint-config)

Combines various plugins and rulesets for use in mi11er.net projects.

## Installation

```shell
npm install --save-dev eslint @mi11er/eslint-config
```

or

```shell
yarn add -D eslint @mi11er/eslint-config
```

You most likely want to also install additional plugins/configs for ESLint. If you do, the following ones are automatically detected and configured for you.

1. `eslint-config-airbnb` OR `eslint-config-airbnb-base`
   * `eslint-plugin-import`
   * `eslint-plugin-jsx-a11y`
   * `eslint-plugin-react`
1. `eslint-plugin-security`
1. `eslint-config-prettier`

## Setup

Add the config to your `.eslintrc` file:

```json
{
  "extends": "@mi11er"
}
```
