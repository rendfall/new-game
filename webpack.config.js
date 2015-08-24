module.exports = {
    entry: __dirname + '/app/main.es6.js',

    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js'
    },

    // http://webpack.github.io/docs/configuration.html#devtool
    devtool: "#cheap-module-source-map",

    module: {
        loaders: [
            {
                test: /\.es6.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
