## [3.0.2](https://github.com/mi11er-net/eslint-config/compare/v3.0.1...v3.0.2) (2026-06-14)

### Bug Fixes

- **ci:** force 3.0.2 release after failed 3.0.1 publish attempts ([ec26627](https://github.com/mi11er-net/eslint-config/commit/ec2662784da949b81a91fef38a680bc9d2735327))

## [3.0.1](https://github.com/mi11er-net/eslint-config/compare/v3.0.0...v3.0.1) (2026-06-14)

### Bug Fixes

- **ci:** use ./release path prefix for npm publish to avoid GitHub shorthand interpretation ([a7ffbd3](https://github.com/mi11er-net/eslint-config/commit/a7ffbd357a231774586ad9cabf67a71473435e16))

# [3.0.0](https://github.com/mi11er-net/eslint-config/compare/v2.4.1...v3.0.0) (2026-06-14)

- feat!: prepare v3.0.0 — ESLint 10, dep bumps, legacy-peer-deps ([ab9657a](https://github.com/mi11er-net/eslint-config/commit/ab9657afe4cc0690f1b555083142614135d845db)), closes [#226](https://github.com/mi11er-net/eslint-config/issues/226)

### Bug Fixes

- **ci:** bypass @semantic-release/npm auth using exec + npm publish directly ([665d9f3](https://github.com/mi11er-net/eslint-config/commit/665d9f39d559d4e6aa984d2b68fbfd57f3a27d9b)), closes [semantic-release/npm#1121](https://github.com/semantic-release/npm/issues/1121)
- **ci:** mkdir -p release before npm pack (directory is gitignored) ([eafe689](https://github.com/mi11er-net/eslint-config/commit/eafe689df9fdf37c0a8d3657cbde41063729cf83))
- **ci:** switch npm publish to OIDC trusted publishing ([748b0e4](https://github.com/mi11er-net/eslint-config/commit/748b0e4b2a7c85ac70ac94033781fd973e5505cd))
- **ci:** upgrade semantic-release stack and pin Node for OIDC support ([96c400c](https://github.com/mi11er-net/eslint-config/commit/96c400cde5dd6108b28dc69046f1e3df30a91764))
- **deps:** update dependency eslint-config-airbnb to v17.1.1 ([4730d2e](https://github.com/mi11er-net/eslint-config/commit/4730d2e43991d79b27384f8a584d232127251d9c))
- **deps:** update dependency eslint-config-airbnb-base to v13.2.0 ([095f13e](https://github.com/mi11er-net/eslint-config/commit/095f13ec02273a85db1b945bef3661741c362851))
- **deps:** update dependency eslint-config-prettier to v4.3.0 ([e8b6f3a](https://github.com/mi11er-net/eslint-config/commit/e8b6f3af995970d1353b5334d09caa9832dcd68a))
- **deps:** update eslint monorepo to v10 ([d49bd98](https://github.com/mi11er-net/eslint-config/commit/d49bd98fa70b170bca9079a176ea3bd189b1efb9))

### Features

- convert package to ESM (Phase 2) ([dc1483c](https://github.com/mi11er-net/eslint-config/commit/dc1483c59297fba8ca4f18054bdbfae79deb74b0)), closes [#225](https://github.com/mi11er-net/eslint-config/issues/225)
- migrate to ESLint flat config format (Phase 1) ([c3213ff](https://github.com/mi11er-net/eslint-config/commit/c3213ffabc0a7ee2484a0185f255495f7826a90f)), closes [#224](https://github.com/mi11er-net/eslint-config/issues/224)

### BREAKING CHANGES

- Package now requires flat config (no eslintrc support).
  Consumers must use eslint.config.js (or .mjs) with ESM import syntax.
  ESLint 8 is no longer supported. Peer dep changes:

* eslint ^9.0.0 || ^10.0.0 (was ^8.23.0 || ^9.0.0 || ^10.0.0)
* eslint-plugin-import-x ^4.0.0 (replaces eslint-plugin-import)
* eslint-plugin-react-hooks ^7.0.0 (was ^4.3.0)
* eslint-plugin-scanjs-rules removed (unmaintained, no flat config support)

## [2.4.1](https://github.com/mi11er-net/eslint-config/compare/v2.4.0...v2.4.1) (2019-04-01)

### Bug Fixes

- **deps:** update eslint ([0828ddb](https://github.com/mi11er-net/eslint-config/commit/0828ddb))

# [2.4.0](https://github.com/mi11er-net/eslint-config/compare/v2.3.0...v2.4.0) (2018-07-31)

### Features

- **node:** add new eslint-node rules ([1f86ac3](https://github.com/mi11er-net/eslint-config/commit/1f86ac3))

# [2.3.0](https://github.com/mi11er-net/eslint-config/compare/v2.2.2...v2.3.0) (2018-07-13)

### Features

- **node:** add eslint-plugin-node ([ccfb468](https://github.com/mi11er-net/eslint-config/commit/ccfb468)), closes [#24](https://github.com/mi11er-net/eslint-config/issues/24)

<a name="2.2.2"></a>

## [2.2.2](https://github.com/mi11er-net/eslint-config/compare/v2.2.1...v2.2.2) (2018-04-03)

### Bug Fixes

- **packages:** update eslint and peerDependencies ([48e960d](https://github.com/mi11er-net/eslint-config/commit/48e960d)), closes [#38](https://github.com/mi11er-net/eslint-config/issues/38)

<a name="2.2.1"></a>

## [2.2.1](https://github.com/mi11er-net/eslint-config/compare/v2.2.0...v2.2.1) (2018-03-17)

### Bug Fixes

- **deps:** update peer dependencies ([5fa0d8a](https://github.com/mi11er-net/eslint-config/commit/5fa0d8a))

<a name="2.2.0"></a>

# [2.2.0](https://github.com/mi11er-net/eslint-config/compare/v2.1.0...v2.2.0) (2018-02-28)

### Features

- **extensions:** Add .mjs to list of support extentions ([a78be7e](https://github.com/mi11er-net/eslint-config/commit/a78be7e))

<a name="2.1.0"></a>

# [2.1.0](https://github.com/mi11er-net/eslint-config/compare/v2.0.0...v2.1.0) (2018-02-26)

### Features

- **security:** Change eslint-plugin-security rules to error ([d47cd49](https://github.com/mi11er-net/eslint-config/commit/d47cd49))

<a name="2.0.0"></a>

# [2.0.0](https://github.com/mi11er-net/eslint-config/compare/v1.2.1...v2.0.0) (2018-02-22)

### Code Refactoring

- **dependencies:** load configs locally and make plugins peerDependencies ([21c0244](https://github.com/mi11er-net/eslint-config/commit/21c0244))

### Features

- **security:** add ScanJs eslint plugin and rules ([6736893](https://github.com/mi11er-net/eslint-config/commit/6736893))

### BREAKING CHANGES

- **dependencies:** linting will now error if the required plugins are not installed. If desired you
  must specify the react config.

<a name="1.2.1"></a>

## [1.2.1](https://github.com/mi11er-net/eslint-config/compare/v1.2.0...v1.2.1) (2018-02-18)

### Bug Fixes

- **jsdoc:** remove requirement for return statemnt ([7a40ca0](https://github.com/mi11er-net/eslint-config/commit/7a40ca0))

<a name="1.2.0"></a>

# [1.2.0](https://github.com/mi11er-net/eslint-config/compare/v1.1.0...v1.2.0) (2018-02-18)

### Features

- **eslint:** Set complexity ([fa3211b](https://github.com/mi11er-net/eslint-config/commit/fa3211b))

<a name="1.1.0"></a>

# [1.1.0](https://github.com/mi11er-net/eslint-config/compare/v1.0.0...v1.1.0) (2018-02-17)

### Features

- **plugin:** Add regex checking ([103f066](https://github.com/mi11er-net/eslint-config/commit/103f066))
