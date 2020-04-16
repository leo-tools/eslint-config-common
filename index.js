'use strict';

module.exports = {
    extends: [
        require.resolve('eslint-config-standard')
    ],
    rules: {
        'template-curly-spacing': 'off',
        'no-console': 'off',
        'no-debugger': 'error',
        'generator-star-spacing': 'off',
        'no-mixed-operators': 0,
        'vue/max-attributes-per-line': 0,
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
