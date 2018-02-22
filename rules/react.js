const extendedConfigs = ['eslint-config-airbnb'].map(require.resolve);

module.exports = {
  extends: extendedConfigs,
};
