# eslint-config-nshcore


My preferred strict eslint rules for typescript projects.

##

Lots of rules to help with clean and consistent code style, but also to offer protection from some bad programming hbbits around async/await and promises.

## Plugins

```js
        '@typescript-eslint/eslint-plugin',
        'import',
        'import-newlines',
        'promise',
        'async-await'
```

## Extends

```js
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript'
```
