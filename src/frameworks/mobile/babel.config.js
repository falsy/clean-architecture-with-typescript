module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        "root": ["."],
        "alias": {
          "@adapters": "../../adapters",
          "@domains": "../../domains",
          "@frameworks": "../../frameworks",
          "@di": "./di"
        }
      }
    ]
  ]
};
