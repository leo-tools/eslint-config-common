'use strict'

module.exports = {
    extends: [
        require.resolve('eslint-config-standard')
    ],
    rules: {
        'sort-imports': ['warn', {
            'ignoreCase': false,
            'ignoreDeclarationSort': false,
            'ignoreMemberSort': false,
            'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single']
        }],
        'guard-for-in': 'error',
        'no-return-await': 'error',
        'no-unneeded-ternary': 'error',
        'arrow-body-style': ['error', 'as-needed'],
        'arrow-parens': ['error', 'as-needed'],
        'constructor-super': 'error',
        'no-duplicate-imports': 'error',
        'prefer-arrow-callback': 'error',
        'jsx-quotes': ['error', 'prefer-double'],
        'template-curly-spacing': 'off',
        'no-console': 'off',
        'no-debugger': 'error',
        'generator-star-spacing': 'off',
        'no-mixed-operators': 0,
        'no-tabs': 0,
        quotes: [
            2,
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
        semi: [
            2,
            'never',
            {
                beforeStatementContinuationChars: 'never'
            }
        ],
        'no-delete-var': 2,
        'prefer-const': [
            2,
            {
                ignoreReadBeforeAssign: false
            }
        ]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
