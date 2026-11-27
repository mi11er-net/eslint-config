# @mi11er/eslint-config

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3f9bcb5d38f24b4983e8972f12941575)](https://app.codacy.com/app/mi11er/eslint-config?utm_source=github.com&utm_medium=referral&utm_content=mi11er-net/eslint-config&utm_campaign=badger)
[![Build Status](https://travis-ci.org/mi11er-net/eslint-config.svg?branch=master)](https://travis-ci.org/mi11er-net/eslint-config)

Combines various plugins and rulesets for use in mi11er.net projects.

This package is an ESLint [flat config](https://eslint.org/docs/latest/use/configure/configuration-files) for ESLint 9 and 10. For ESLint 8 and `.eslintrc`, use version 2.x.

## Installation

Install ESLint, this config and its required peer dependencies:

```shell
npm install --save-dev eslint @mi11er/eslint-config eslint-plugin-import-x eslint-plugin-n eslint-plugin-no-unsanitized eslint-plugin-optimize-regex eslint-plugin-security
```

React/Preact projects also need:

```shell
npm install --save-dev eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

## Setup

Add the config to your `eslint.config.js`:

```js
import mi11er from '@mi11er/eslint-config';

export default [...mi11er];
```

or for React/Preact based projects:

```js
import mi11er from '@mi11er/eslint-config/react';

export default [...mi11er];
```

Add your own config objects after the spread to extend or override rules:

```js
import mi11er from '@mi11er/eslint-config';

export default [
  { ignores: ['dist/**'] },
  ...mi11er,
  {
    rules: {
      // project-specific overrides
    },
  },
];
```
