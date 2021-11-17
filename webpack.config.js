require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    // Points d'entrée JavaScript.
    entry: {
        front: './assets/front.js',
    },
    output: {
        path: path.resolve(__dirname, 'public/build'),
        filename: "js/[name].js",
        publicPath: 'build/'
    },

    module: {
        rules: [
            // Règles fichiers CSS.
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: { sourceMap: true,}
                    }
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "assets/image",
                generator: {
                    filename: 'image/[name][ext]'
                }
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                }
            }
        ],
    },

    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({ filename: "css/[name].css", }),
    ],
};