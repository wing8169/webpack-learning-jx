const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  mode: mode,
  entry: {
    main: "./src/index.js", // bundle separately
    vendor: "./src/vendor.js", // bundle separately
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",
        // use: {
        //   loader: "url-loader",
        //   options: {
        //     name: "[name].[hash].[ext]",
        //     outputPath: "imgs",
        //   },
        // },
      },
    ],
  },
};
