module.exports = {
  preset: "ts-jest",
  moduleFileExtensions: ["js", "json", "ts"],
  testRegex: ".*\\.spec\\.ts$",
  collectCoverageFrom: ["**/*.ts"],
  testEnvironment: "node"
}
