const path = require('path');

module.exports = {
    resolve: {
        fallback: {
            "http": require.resolve("stream-http"),
            "stream": require.resolve("stream-browserify"),
            "https": require.resolve("https-browserify"),
            "zlib": require.resolve("browserify-zlib")
        },
        alias: {
            '@': path.resolve('resources/js'),
        },
    },
};
