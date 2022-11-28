module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readable',
    SharedArrayBuffer: 'readable',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        moduleDirectory: ['node_modules'],
      },
    },
  },
  plugins: ['react', 'jsx-a11y', 'import', 'html', '@typescript-eslint', 'react-hooks', 'prettier'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    semi: ['error', 'never'],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'warn',
    'no-return-assign': 'off',
    'no-eq-null': 'error',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['ctx'] }],
    'no-underscore-dangle': 'off',
    'no-mixed-operators': 'off',
    'no-nested-ternary': 'off',
    'object-curly-spacing': ['error', 'always'],
    'linebreak-style': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true, argsIgnorePattern: '^_' }],
    'no-use-before-define': ['error', { functions: false, variables: false }],
    'newline-per-chained-call': 'off',
    'array-element-newline': ['error', 'consistent'],
    'no-shadow': 'warn',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
      },
    ],
    camelcase: 'warn',
    'prefer-destructuring': 'warn',
    'arrow-body-style': 'warn',
    'object-curly-newline': ['warn', { consistent: true }],
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/forbid-prop-types': 'off',
    'react/sort-comp': 'off',
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-max-props-per-line': [1, { maximum: 1 }],
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off', // props validation by typescript
    'no-confusing-arrow': 0,
    'react/destructuring-assignment': 'off',
    'react/jsx-wrap-multilines': 'off',
    'space-infix-ops': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Disabled by duplicated with prettier setting
    quotes: 'off',
    'jsx-quotes': 'off',
    'comma-dangle': 'off',
    'max-len': 'off',
    'arrow-parens': 'off',

    // fix typescript syntax error
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
  },
}
