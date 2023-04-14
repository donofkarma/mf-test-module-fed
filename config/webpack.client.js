const path = require("path");
const { merge } = require("webpack-merge");
const sharedWebpackConfig = require("./webpack.shared");
const moduleFederationPlugin = require("./module-federation");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = merge(sharedWebpackConfig, {
  output: {
    path: path.resolve(__dirname, "../build/client"),
    publicPath: "http://localhost:3001/client/",
  },
  plugins: [
    moduleFederationPlugin.client,
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
});
