const path = require('path');
const AutoPrefixer = require('autoprefixer');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env, options) => {
  const mode = options.mode;
  const isDevelopMode = mode === 'development';
  const output = isDevelopMode ? './public/' : './dist/';
  const outputPath = path.resolve(__dirname, output);
  return {
    entry: {
      'assets/scripts/index': path.join(
        __dirname,
        'src/assets/scripts/index.ts'
      ),
      'assets/styles/style': path.join(
        __dirname,
        'src/assets/styles/style.scss'
      )
    },
    output: {
      path: outputPath,
      publicPath: '/',
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader'
        },
        {
          test: /\.scss$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            { loader: 'css-loader', options: { url: false } },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  AutoPrefixer({
                    overrideBrowserslist: ['last 2 versions', 'Android >= 4']
                  })
                ]
              }
            },
            { loader: 'sass-loader' }
          ]
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        }
      ]
    },
    devServer: {
      contentBase: path.resolve(__dirname, './public/'),
      open: true,
      port: 3000
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: `[name].css` }),
      new FixStyleOnlyEntriesPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})]
    }
  };
};
