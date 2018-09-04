const webpack = require('webpack');
const serverConfig = {
  target: "node",
  mode: "production",
  devtool: "inline-source-map",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.node.js",
    libraryTarget: 'umd',
    library: 'Bigneon',
    umdNamedDefine: true
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new webpack.DefinePlugin({ "global.GENTLY": false })
  ],
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
};

module.exports = serverConfig;
