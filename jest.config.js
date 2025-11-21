/** @type {import('jest').Config} */
const config = {
  clearMocks: true,

  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["json-summary", "text", "lcov"],
};

module.exports = config;
