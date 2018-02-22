const env = {
  browser: true,
  es6: true,
};

const plugins = ['security', 'scanjs-rules', 'no-unsafe-innerhtml'];

const rules = {
  /* security rules */
  'security/detect-buffer-noassert': 'warn',
  'security/detect-child-process': 'warn',
  'security/detect-disable-mustache-escape': 'warn',
  'security/detect-eval-with-expression': 'warn',
  'security/detect-new-buffer': 'warn',
  'security/detect-no-csrf-before-method-override': 'warn',
  'security/detect-non-literal-fs-filename': 'warn',
  'security/detect-non-literal-regexp': 'warn',
  'security/detect-non-literal-require': 'warn',
  'security/detect-object-injection': 'warn',
  'security/detect-possible-timing-attacks': 'warn',
  'security/detect-pseudoRandomBytes': 'warn',
  'security/detect-unsafe-regex': 'warn',

  /* no-unsafe-innerhtml rule */
  'no-unsafe-innerhtml/no-unsafe-innerhtml': 'error',

  /* ScanJS rules */
  'scanjs-rules/accidental_assignment': 'warn',
  'scanjs-rules/assign_to_hostname': 'warn',
  'scanjs-rules/assign_to_href': 'warn',
  'scanjs-rules/assign_to_location': 'warn',
  'scanjs-rules/assign_to_onmessage': 'warn',
  'scanjs-rules/assign_to_pathname': 'warn',
  'scanjs-rules/assign_to_protocol': 'warn',
  'scanjs-rules/assign_to_search': 'warn',
  'scanjs-rules/assign_to_src': 'warn',
  'scanjs-rules/call_Function': 'warn',
  'scanjs-rules/call_addEventListener': 'warn',
  'scanjs-rules/call_addEventListener_deviceproximity': 'warn',
  'scanjs-rules/call_addEventListener_message': 'warn',
  'scanjs-rules/call_connect': 'warn',
  'scanjs-rules/call_eval': 'warn',
  'scanjs-rules/call_execScript': 'warn',
  'scanjs-rules/call_hide': 'warn',
  'scanjs-rules/call_open_remote=true': 'warn',
  'scanjs-rules/call_parseFromString': 'warn',
  'scanjs-rules/call_setImmediate': 'warn',
  'scanjs-rules/call_setInterval': 'warn',
  'scanjs-rules/call_setTimeout': 'warn',
  'scanjs-rules/identifier_indexedDB': 'warn',
  'scanjs-rules/identifier_localStorage': 'warn',
  'scanjs-rules/identifier_sessionStorage': 'warn',
  'scanjs-rules/new_Function': 'warn',
  'scanjs-rules/property_addIdleObserver': 'warn',
  'scanjs-rules/property_createContextualFragment': 'warn',
  'scanjs-rules/property_crypto': 'warn',
  'scanjs-rules/property_geolocation': 'warn',
  'scanjs-rules/property_getUserMedia': 'warn',
  'scanjs-rules/property_indexedDB': 'warn',
  'scanjs-rules/property_localStorage': 'warn',
  'scanjs-rules/property_mgmt': 'warn',
  'scanjs-rules/property_sessionStorage': 'warn',
};

module.exports = {
  env,
  plugins,
  rules,
};
