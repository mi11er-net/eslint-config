const isInstalled = (name, type) => {
  const localType = name.startsWith('plugin:') ? 'plugin' : type;
  const localName = name.replace('plugin:', '').split('/')[0];

  try {
    require.resolve(`eslint-${localType}-${localName}`);
    return true;
  } catch (ex) {
    return false;
  }
};

module.exports = isInstalled;
