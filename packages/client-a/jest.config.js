const path = require("path")
const baseConfig = require("../../jest.config")

module.exports = {
  ...baseConfig,
  setupFilesAfterEnv: [path.resolve(__dirname, "jest.setup.js")],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^domains/(.*)$": path.resolve(__dirname, "../domains/src/$1"),
    "^adapters/(.*)$": path.resolve(__dirname, "../adapters/src/$1")
  }
}
