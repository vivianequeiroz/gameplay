module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        resolve: {
            extensions: ['.js', '.jsx', '.tsx']
        }
    };
};
