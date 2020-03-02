module.exports = {
  setupFiles: [
    "<rootDir>/jest-setup.js"
  ],
  transform: {
    "^.+\\.(ts|tsx|js)": "ts-jest"
  },
  testMatch: [
    "**/test/**/*.spec.(ts|tsx|js)"
  ],
  moduleFileExtensions: ["ts", "tsx", "js"],
  globals: {
    "ts-jest": {
      diagnostics: {
        ignoreCodes: ['TS151001']
      }
    }
  },
  moduleNameMapper: { 
    "^.+\\.(scss|css|svg|png|sass)$": "identity-obj-proxy",
    "^@adapters/(.*)$": "<rootDir>/src/adapters/$1",
    "^@domains/(.*)$": "<rootDir>/src/domains/$1",
    "^@frameworks/(.*)$": "<rootDir>/src/frameworks/$1",
    "^@interfaces/(.*)$": "<rootDir>/src/interfaces/$1"
  }
};