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
        'async-await'
    ],
    'extends': [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript'
    ],
    'root': true,
    'env': {
        'node': true,
        'jest': true,
    },
    'rules': {
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
        'quotes': [
            'error',
            'single',
            {
                'avoidEscape': true,
                'allowTemplateLiterals': true,
            },
        ],
        'no-console': 'error',
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
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/explicit-member-accessibility': ['error'],
        'no-return-await': 'error',
        'no-await-in-loop': 'error',
        'require-await': 'off',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        'semi': 'off',
        '@typescript-eslint/semi': ['error'],
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
        'no-unused-vars': [
            'error',
            {
                'vars': 'all',
                'args': 'after-used',
                'ignoreRestSiblings': false,
            },
        ],
        'no-redeclare': [
            'error',
            {
                'builtinGlobals': true,
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
        'import/no-extraneous-dependencies': 'error',
        'import/no-dynamic-require': 'error',
        'import/export': 'error',
        'import/no-useless-path-segments': 'error',
        'import/no-unassigned-import': 'error',
        'import/no-self-import': 'error',
        // 'import/no-restricted-paths': [ 'error', {
        //     'zones': [
        //         {
        //             'target': './libs',
        //             'from': './apps',
        //         },
        //         {
        //             'target': './libs',
        //             'from': './ui',
        //         },
        //         {
        //             'target': './apps',
        //             'from': './ui',
        //         }
        //     ]
        // }],
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
        'no-multi-spaces': 'error',
        'no-irregular-whitespace': 'error',
        'no-whitespace-before-property': 'error',
        'no-multiple-empty-lines': 'error',
        'no-trailing-spaces': 'error',
        'key-spacing': [ 'error', {
            'afterColon': true,
        }],
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
