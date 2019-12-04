const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, options) => {
    return {
        entry: {
            'assets/scripts/index': path.join(__dirname, 'src/assets/scripts/index.ts')
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ]
    }
}