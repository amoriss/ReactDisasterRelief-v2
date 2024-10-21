const path = require('path');

module.exports = {
    entry: './src/index.js', // Update to your actual entry file
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output bundle file name
    },
    resolve: {
        fallback: {
            "zlib": require.resolve("browserify-zlib"),
            "querystring": require.resolve("querystring-es3"),
            "path": require.resolve("path-browserify"),
            "crypto": require.resolve("crypto-browserify"),
            "fs": false
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Assuming you're using Babel
                    options: {
                        presets: ['@babel/preset-env'] // Update based on your setup
                    }
                }
            }
        ]
    },
    // Add other necessary configurations like devServer, plugins, etc.
};
