import baseRules from './rules/base.js';
import reactRules from './rules/react.js';
import securityRules from './rules/security.js';
import prettierRules from './rules/prettier.js';

export default [
  ...baseRules,
  ...reactRules,
  ...securityRules,
  ...prettierRules,
];
