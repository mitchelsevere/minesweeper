const path = require("path");

module.exports = {
    entry: "./App.jsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", "*"]
    },
    devtool: "source-map"
};
