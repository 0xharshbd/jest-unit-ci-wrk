/** @type {import('jest').Config} */
const config = {
  clearMocks: true,

  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["json-summary", "lcov", "text"],
};

module.exports = config;
