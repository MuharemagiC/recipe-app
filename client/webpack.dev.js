const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  devtool: "eval-source-map",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./public/dist"),
    filename: "[name].bundle.js",
  },
});
