const path = require("path")
const baseConfig = require("../../jest.config")

module.exports = {
  ...baseConfig,
  setupFilesAfterEnv: [path.resolve(__dirname, "setupTests.ts")],
  testEnvironment: "jsdom"
}
