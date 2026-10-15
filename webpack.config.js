import HtmlWebpackPlugin from "html-webpack-plugin";
// import { watchFile } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    devtool: "eval-source-map",
    devServer : {
        watchFiles: ["./src/template.html"]
    },

    module : {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },

            { 
                test: /\.html$/i,
                use: ["html-loader"],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),
    ],
};