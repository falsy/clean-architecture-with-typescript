module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        "root": ["."],
        "extensions": [".ts", ".tsx"],
        "alias": {
          "@adapters": "../../adapters",
          "@domains": "../../domains",
          "@frameworks": "../../frameworks",
          "@di": "../../di"
        }
      }
    ]
  ]
};
