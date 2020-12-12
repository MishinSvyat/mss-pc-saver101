const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-reporter'),
        require('postcss-mixins'),
        require('postcss-nested'),
        postcssPresetEnv({
            stage: 0,
            preserve: false,
        }),
    ],
};
