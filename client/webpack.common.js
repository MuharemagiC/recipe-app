const HtmlWP = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
    editRecipe: "./src/js/editRecipe/index.js",
    addRecipe: "./src/js/addRecipe/index.js",
  },
  plugins: [
    new HtmlWP({
      filename: "index.html",
      template: "./src/views/index.html",
      chunks: ["app"],
    }),
    new HtmlWP({
      filename: "editRecipe.html",
      template: "./src/views/editRecipe.html",
      chunks: ["editRecipe"],
    }),
    new HtmlWP({
      filename: "addRecipe.html",
      template: "./src/views/addRecipe.html",
      chunks: ["addRecipe"],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [["@babel/transform-runtime"]],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: "single",
  },
};
