const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // HtmlWebpackPlugin configuration
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/install.html',
        filename: 'install.html',
        chunks: ['install'],
      }),

      // WebpackPwaManifest configuration
      new WebpackPwaManifest({
        name: 'Editor App',
        short_name: 'App',
        description: 'My Progressive Web App Text Editor',
        background_color: '#ffffff',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),

      // InjectManifest configuration for Workbox
      new InjectManifest({
        swSrc: './src-sw',
        swDest: 'src-sw.js',
      }),
    ],

    module: {
      rules: [
        // CSS loaders rule
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },

        // Babel loader rule
        {
          test: /\.m?js$/,
          exclude: /node_modules/i,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread',
            '@babel/transform-runtime']
            },
          },
        },
      ],
    },
  };
};