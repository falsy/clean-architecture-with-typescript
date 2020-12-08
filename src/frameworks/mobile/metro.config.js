/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path')
const extraNodeModules = {
  '@adapters': path.resolve(__dirname + '/../../adapters'),
  '@domains': path.resolve(__dirname + '/../../domains'),
  '@frameworks': path.resolve(__dirname + '/../../frameworks'),
}
const watchFolders = [
  path.resolve(__dirname + '/../../adapters'),
  path.resolve(__dirname + '/../../domains'),
  path.resolve(__dirname + '/../../frameworks'),
]

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) =>
        name in target ? target[name] : path.join(process.cwd(), `node_modules/${name}`),
    }),
  },
  watchFolders,
}
