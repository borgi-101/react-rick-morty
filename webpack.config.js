const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const rulesJavaScript = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader"
    }
}
const rulesForStyles = {
    test: /\.s?css$/,
    use: [
        MiniCssExtractPlugin.loader, "css-loader", "sass-loader"
    ]
}
const rulesHTML = {
    test: /\.html$/,
    use: {
        loader: "html-loader"
    }
}


module.exports = {
    entry : "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "./main.js"
    },
    mode: "development",
    resolve:{
        extensions: [".js",".jsx"]
    },
    module: {
        rules: [rulesHTML, rulesJavaScript, rulesForStyles]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin()
    ]
}