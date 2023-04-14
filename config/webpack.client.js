require('dotenv').config({ path: './.env.local' }); 
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require('webpack');
const { merge } = require("webpack-merge");

const sharedWebpackConfig = require("./webpack.shared");
const moduleFederationPlugin = require("./module-federation");

module.exports = merge(sharedWebpackConfig, {
  output: {
    path: path.resolve(__dirname, "../build/client"),
    publicPath: `${process.env.VERCEL_URL_PROTOCOL}${process.env.VERCEL_URL}/client/`,
  },
  plugins: [
    new DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
    moduleFederationPlugin.client,
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
});
