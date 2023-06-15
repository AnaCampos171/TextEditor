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
      new HtmlWebpackPlugin({
        template: './index.html',
        title: "Editor"
   
      }),
      new WebpackPwaManifest({
        fingerprints: false,
        inject:true,
        name: 'My Text Editor App',
        short_name: 'App',
        description: 'My Progressive Web App',
        background_color: '#ffffff',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
      new InjectManifest({
        swSrc: './src-sw',
        swDest: 'src-sw.js',
      }),
    ],

    module: {
      rules: [
        // CSS loaders rule
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },

        // Babel loader rule
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};
