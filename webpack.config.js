import HtmlWebpackPlugin from "html-webpack-plugin";
import { watchFile } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clear: true,
    },

    devtool: "eval-source-map",
    devServer : {
        watchFile: ["./src/template.html"]
    },

    module : {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },

    plugin: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),
    ],
};