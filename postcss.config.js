module.exports = {
    plugins: [
        require('postcss-nested'),
        [
            'postcss-preset-env',
            {
                // Options
                sourceMap: true,
            },
        ],
    ]
};
