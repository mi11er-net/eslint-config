const extendedConfig = ['eslint-config-prettier'].map(require.resolve);

module.exports = {
  extends: extendedConfig,
};
