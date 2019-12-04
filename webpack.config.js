const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, options) => {
    const mode = options.mode;
    const isDevelopMode = mode === 'development';
    const output = isDevelopMode ? './public/' : './dist/';
    const outputPath = path.resolve(__dirname, output);
    return {
        entry: {
            'assets/scripts/index': path.join(__dirname, 'src/assets/scripts/index.ts')
        },
        output: {
            path: outputPath,
            publicPath: '/',
            filename: '[name].js'
        },
        devServer: {
            contentBase: path.resolve(__dirname, './public/'),
            watchContentBase: true,
            open: true,
            port: 9000
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ]
    }
}