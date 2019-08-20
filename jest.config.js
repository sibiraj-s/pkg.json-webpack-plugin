module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['lib/**/*.js', '!**/node_modules/**', '!**/vendor/**'],
  testPathIgnorePatterns: ['node_modules', '.cache'],
};
