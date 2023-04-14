const path = require("path");
const { merge } = require("webpack-merge");
const sharedWebpackConfig = require("./webpack.shared");
const moduleFederationPlugin = require("./module-federation");

module.exports = merge(sharedWebpackConfig, {
  output: {
    path: path.resolve(__dirname, "../build/server"),
    filename: "[name].js",
    libraryTarget: "commonjs-module",
  },
  target: false,
  name: "server",
  externals: { react: "react" },
  plugins: [...moduleFederationPlugin.server],
});
