module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'standard',
        'plugin:vue/recommended'
    ],
    'rules': {
        'indent': [
            'error',
            4,
            { 'SwitchCase': 1 }
        ],
        'no-multi-spaces': [
            'error',
            {
                'ignoreEOLComments': true
            }
        ],
        'no-self-assign': 'off',
        'semi': [
            'error',
            'always'
        ],
        'no-console': [
            'error'
        ],
        'id-blacklist': [
            'error',
            '$log.log',
            '$log.info',
            '$log.warn',
            '$log.debug'
        ],
        'no-warning-comments': 1
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
