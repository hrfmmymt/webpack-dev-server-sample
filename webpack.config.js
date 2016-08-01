module.exports = {
  entry: {
    app: "./src/js/entry.js"
  },
  output: {
    path: "./public/js",
    publicPath: "/js/",
    filename: "[name].js"
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".css"]
  },
  eslint: {
    configFile: "./.eslintrc"
  }
};