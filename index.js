import baseRules from './rules/base.js';
import nodeRules from './rules/node.js';
import securityRules from './rules/security.js';
import prettierRules from './rules/prettier.js';

export default [...baseRules, ...nodeRules, ...securityRules, ...prettierRules];
