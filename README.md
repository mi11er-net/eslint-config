# @mi11er/eslint-config

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3f9bcb5d38f24b4983e8972f12941575)](https://app.codacy.com/app/mi11er/eslint-config?utm_source=github.com&utm_medium=referral&utm_content=mi11er-net/eslint-config&utm_campaign=badger)
[![Build Status](https://travis-ci.org/mi11er-net/eslint-config.svg?branch=master)](https://travis-ci.org/mi11er-net/eslint-config)

Combines various plugins and rulesets for use in mi11er.net projects.

## Installation

Note: don't forget the require peerDepencies.

```shell
npm install --save-dev eslint @mi11er/eslint-config eslint-plugin-optimize-regex eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-security
```

or

```shell
yarn add -D eslint @mi11er/eslint-config eslint-plugin-optimize-regex eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-security
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
