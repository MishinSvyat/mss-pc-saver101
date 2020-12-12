const config = {
    presets: ['@babel/env', '@babel/typescript', '@babel/react'],
    plugins: [
        '@babel/plugin-transform-template-literals',
        '@babel/plugin-proposal-numeric-separator',
        '@babel/proposal-object-rest-spread',
        '@babel/plugin-proposal-optional-chaining',
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-transform-runtime', { regenerator: true }],
    ],
};

module.exports = config;
