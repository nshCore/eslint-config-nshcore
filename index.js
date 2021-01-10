module.exports = {
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'project': 'tsconfig.json',
        'sourceType': 'module',
    },
    'plugins': [
        '@typescript-eslint/eslint-plugin',
        'import',
        'import-newlines',
        'promise',
        'async-await',
        'jest'
    ],
    'extends': [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:promise/recommended'
    ],
    'root': true,
    'env': {
        'node': true,
        'jest': true,
    },
    'rules': {
        complexity: 'warn',
        radix: 'error',
        yoda: 'error',

        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/explicit-member-accessibility': ['error'],
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/semi': ['error'],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                'selector': 'interface',
                'format': ['PascalCase'],
                'custom': {
                    'regex': '^I[A-Z]',
                    'match': true
                }
            }
        ],

        'accessor-pairs': 'error',
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'consistent-return': 'error',
        'guard-for-in': 'error',
        'max-classes-per-file': ['error', 1],
        'no-alert': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-div-regex': 'error',
        'no-else-return': 'error',
        'no-empty-function': [
            'error',
            {
                allow: ['arrowFunctions'],
            },
        ],
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': 0,
        'no-multi-spaces': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'error',
        'no-proto': 'error',
        'no-redeclare': [
            'error',
            {
                'builtinGlobals': true,
            },
        ],
        'no-console': 'error',
        'no-unused-vars': [
            'error',
            {
                'vars': 'all',
                'args': 'after-used',
                'ignoreRestSiblings': false,
            },
        ],
        'no-return-assign': 'error',
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'no-warning-comments': 'error',
        'no-with': 'error',
        'prefer-promise-reject-errors': 'error',
        'require-unicode-regexp': 'error',
        'vars-on-top': 'error',
        'wrap-iife': 'error',

        'no-irregular-whitespace': 'error',
        'no-whitespace-before-property': 'error',
        'no-multiple-empty-lines': 'error',
        'no-trailing-spaces': 'error',
        'key-spacing': [ 'error', {
            'afterColon': true,
        }],
        'indent': ['error', 2],
        'block-spacing': 'error',
        'linebreak-style': ['error', 'unix'],
        'object-property-newline': 'error',
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'always'],
        'array-bracket-newline': ['error', { 'multiline': true, 'minItems': 1 }],
        'object-curly-newline': ['error', {
            'ObjectExpression': 'always',
            'ObjectPattern': { 'multiline': true },
            'ImportDeclaration': { 'multiline': true, 'minProperties': 2 },
            'ExportDeclaration': { 'multiline': true, 'minProperties': 2 }
        }],
        'array-element-newline': [
            'error',
            'always'
        ],
        'comma-dangle': [
            'error',
            {
                'arrays': 'always-multiline',
                'objects': 'always-multiline',
                'imports': 'always-multiline',
                'exports': 'always',
                'functions': 'always-multiline',
            },
        ],

        'no-return-await': 'error',
        'no-await-in-loop': 'error',
        'require-await': 'off',
        'semi': 'off',
        'async-await/space-after-async': 2,
        'async-await/space-after-await': 2,
        'promise/always-return': 'error',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error',
        'promise/catch-or-return': 'error',
        'promise/no-native': 'off',
        'promise/no-nesting': 'warn',
        'promise/no-promise-in-callback': 'warn',
        'promise/no-callback-in-promise': 'warn',
        'promise/avoid-new': 'warn',
        'promise/no-new-statics': 'error',
        'promise/no-return-in-finally': 'warn',
        'promise/valid-params': 'warn',

        'jest/consistent-test-it': ['error', {fn: 'it'}],
        'jest/expect-expect': 'error',
        'jest/lowercase-name': 0,
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'warn',
        'jest/no-hooks': 0,
        'jest/no-identical-title': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-jest-import': 'error',
        'jest/no-large-snapshots': 'error',
        'jest/no-test-prefixes': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-expect-assertions': 0,
        'jest/prefer-strict-equal': 'error',
        'jest/prefer-to-be-null': 'error',
        'jest/prefer-to-be-undefined': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/prefer-inline-snapshots': 0,
        'jest/valid-describe': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/valid-expect': 'error',
        'quotes': [
            'error',
            'single',
            {
                'avoidEscape': true,
                'allowTemplateLiterals': true,
            },
        ],

        'import/no-unresolved': 'error',
        'import/order': ['error', {
            'groups': [
                'builtin',
                'index',
                'internal',
                'external',
                'object',
                'sibling',
                'parent'
            ],
            'alphabetize': {
                'order':'asc',
                'caseInsensitive': true,
            }
        }],
        'import/no-duplicates': 'error',
        'import/named': 'warn',
        'import/default': 'error',
        'import/no-cycle': 'error',
        'import/namespace': 'error',
        'import/no-extraneous-dependencies': 'error',
        'import/no-dynamic-require': 'error',
        'import/export': 'error',
        'import/no-useless-path-segments': 'error',
        'import/no-unassigned-import': 'error',
        'import/no-self-import': 'error',
        'import-newlines/enforce': [
            'error',
            {
                'items': 1,
                'max-len': 150,
                'semi': true,
            }
        ],
        'max-len': [
            'error',
            {
                'code': 120,
                'ignoreComments': true,
                'ignorePattern': '^import\\s.+\\sfrom\\s.+;$',
                'ignoreStrings': true,
                'ignoreTemplateLiterals': true,
                'ignoreUrls': true
            }
        ],
    },
    'settings': {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            'typescript': {
                'project': [
                    './libs/*/tsconfig.lib.json',
                    './apps/*/tsconfig.app.json',
                    './tsconfig.json',
                ]
            },
        },
        'import/internal-regex': '^@app/',
    }
};
