module.exports = {
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  moduleFileExtensions: ["js", "json", "ts", "tsx"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(ts|tsx|js|jsx)?$": "ts-jest"
  }
}
