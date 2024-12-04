const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Entry point of your app
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Matches JavaScript files
        exclude: /node_modules/,
        use: 'babel-loader',  // Use Babel to transpile JS files
      },
      {
        test: /\.css$/,  // Matches CSS files
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],  // Injects CSS into the DOM
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Resolve JavaScript and JSX files
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Template HTML file
    }),
  ],
  devServer: {
    port: 3000,  // Development server will run on this port
    open: true,  // Open the browser automatically
  },
  mode: 'development',  // Set the build mode to development (for now)
};
