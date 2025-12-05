/* eslint-disable no-console, no-process-exit */
/**
 * Security audit script
 * Checks for critical vulnerabilities in production dependencies
 */
const childProcess = require('child_process');

// Get npm path from environment or find it, avoiding the bundled npm 6.x from semantic-release
// which is in node_modules/.bin and would shadow the system npm
let npmPath;
try {
  // Try to find the system npm using 'which' command and filter out node_modules paths
  const whichResult = childProcess.execSync(
    "which -a npm 2>/dev/null || echo ''",
    { encoding: 'utf8', shell: true }
  );
  const npmPaths = whichResult
    .trim()
    .split('\n')
    .filter((p) => p.indexOf('node_modules') === -1);
  npmPath = npmPaths[0] || 'npm';
} catch (err) {
  npmPath = 'npm';
}

let output;
const filteredPath = process.env.PATH.split(':')
  .filter((p) => p.indexOf('node_modules') === -1)
  .join(':');

try {
  // Redirect stderr to suppress npm errors while still capturing JSON output
  // Use --omit=dev for modern npm (7+)
  const auditCmd = `${npmPath} audit --json --omit=dev 2>/dev/null`;
  output = childProcess.execSync(auditCmd, {
    encoding: 'utf8',
    maxBuffer: 10 * 1024 * 1024,
    shell: true,
    env: { ...process.env, PATH: filteredPath },
  });
} catch (e) {
  // npm audit exits with non-zero when there are vulnerabilities
  output = e.stdout;
}

const audit = JSON.parse(output);
const { vulnerabilities } = audit.metadata;

console.log('Security Audit Results:');
console.log(`  Critical: ${vulnerabilities.critical}`);
console.log(`  High:     ${vulnerabilities.high}`);
console.log(`  Moderate: ${vulnerabilities.moderate}`);
console.log(`  Low:      ${vulnerabilities.low}`);
console.log(`  Total:    ${vulnerabilities.total}`);

if (vulnerabilities.critical > 0) {
  console.error(
    '\n❌ CRITICAL vulnerabilities found in production dependencies!'
  );
  process.exit(1);
}

console.log('\n✓ No critical vulnerabilities in production dependencies');
