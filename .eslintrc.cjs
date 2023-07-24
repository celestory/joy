// eslint-disable-next-line no-undef
module.exports = {
    env: {browser: true, es2020: true},
    extends: ['eslint:recommended', 'plugin:react-hooks/recommended', 'plugin:@typescript-eslint/recommended'],
    plugins: ['react-refresh'],
    //
    parser: '@typescript-eslint/parser',
    parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
    //
    rules: {
        'prefer-template': 'error',
        'react-refresh/only-export-components': 'warn',
        //
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                prefer: 'type-imports',
                fixStyle: 'separate-type-imports',
            },
        ],
        '@typescript-eslint/no-import-type-side-effects': 'error',
    },
};
