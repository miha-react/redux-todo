const webpack = require("webpack");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: `${__dirname}/public/build`,
        publicPath: "build/",
        filename: "bundle.js"
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                    {
                        presets:['react',"es2015"]
                    }
            },

            {
                test:/\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/,/public/]
            },
            {
                test: /\.gif$/,
                loader: "url-loader&limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader&limit=10000&mimetype=image/jdg"
            },
            {
                test: /\.png$/,
                loader: "url-loader&limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg$/,
                loader: "url-loader&limit=10000&mimetype=image/svg"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
            ]
    },
    devServer: {

        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, HEAD, POST",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
            "Access-Control-Allow-Credentials": "true"
        }
    }
};