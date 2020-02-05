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
    "^.+\\.(scss|css|svg|png|sass)$": "identity-obj-proxy"
  }
};