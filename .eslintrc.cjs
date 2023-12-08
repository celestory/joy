module.exports = {
    env: {browser: true, es2020: true},
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    extends: ['eslint:recommended', 'plugin:react-hooks/recommended', 'plugin:@typescript-eslint/recommended'],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    //
    rules: {
        'prefer-template': 'error',
        //
        'react-refresh/only-export-components': 'warn',
        //
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_', varsIgnorePattern: '^_', ignoreRestSiblings: true}],
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
