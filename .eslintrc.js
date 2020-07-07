module.exports = {
    'env': {
        'browser': true,
        'es2020': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 11,
        'sourceType': 'module'
    },
    'rules': {
        'semi': ['error', 'never'],
        'quotes': ['error', 'single'],
        'indent': ['error', 2]
    }
}
