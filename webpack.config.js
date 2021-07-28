const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: path.resolve(__dirname,'./src/scripts/index.ts'),
    devtool: process.env.NODE_ENV === 'production' ? '' : 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 8080,
        index: 'index.html',
        open: true
    },
    watchOptions: {
        ignored: ['**/node_modules'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "REA Group Assignment",
            template: 'src/index.html',
            inject: "body",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'style-loader', options: { injectType: "singletonStyleTag" }
                    },
                    'css-loader'
                ],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                },
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
};
