const path = require("path");
const isDevMode = process.env.NODE_ENV !== "production";

const PROXY = "https://react-tutorials-2.ddev.site/";
// const PROXY = 'https://dummy/';
const PUBLIC_PATH = "/themes/react_example_theme/js/dist_dev/";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: {
    main: [
      "react-hot-loader/patch",
      "./js/src/index.jsx",
      "./js/src/Recipe/index.jsx",
    ],

    recipeViewTeaser: [
      "react-hot-loader/patch",
      "./js/src/RecipeViewTeaser.jsx",
      // "./scss/base.scss",

    ],
  },
  devtool: isDevMode ? "source-map" : false,
  mode: isDevMode ? "development" : "production",
  output: {
    path: isDevMode
      ? path.resolve(__dirname, "js/dist_dev")
      : path.resolve(__dirname, "js/dist"),
    filename: "[name].min.js",
    publicPath: PUBLIC_PATH,
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        include: path.join(__dirname, "js/src"),
        options: {
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
          plugins: ["react-hot-loader/babel"],
        },
      },
      {
        // Preprocess our own .css files
        // This is the place to add your own loaders (e.g. sass/less etc.)
        // for a list of loaders, see https://webpack.js.org/loaders/#styling
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.join(__dirname, "scss"),
      },
    ],
  },
  devServer: {
    port: 8181,
    hot: true,
    https: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    devMiddleware: {
      writeToDisk: true,
    },
    // Settings for http-proxy-middleware.
    proxy: {
      "/": {
        index: "",
        context: () => true,
        target: PROXY,
        publicPath: PUBLIC_PATH,
        secure: false,
        // These settings allow Drupal authentication to work, so you can sign
        // in to your Drupal site via the proxy. They require some corresponding
        // configuration in Drupal's settings.php.
        changeOrigin: true,
        xfwd: true,
      },
    },
  },

  plugins: [
    ///...
    new MiniCssExtractPlugin({
      filename: isDevMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDevMode ? "[id].css" : "[id].[hash].css",
    }),
  ],
};

module.exports = config;
