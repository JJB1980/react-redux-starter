module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true
  },
  extends: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks'],
  globals: {
    expect: 'readonly',
    it: 'readonly',
    context: 'readonly',
    jest: 'readonly',
    JSX: 'readonly'
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': [0, 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    camelcase: [
      0,
      {
        ignoreDestructuring: true
      }
    ],
    'no-console': 0,
    'no-constant-condition': 0,
    'no-use-before-define': 'off',
    'multiline-ternary': 'off',
    'eqeqeq': 0,
    'object-curly-spacing': ['error', 'always'],
    'prefer-promise-reject-errors': 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 0,
    'react/jsx-no-bind': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-handler-names': 0,
    'react/no-unused-prop-types': 0
  },
  'overrides': [
    {
      'files': ['**/*.ts', '**/*.tsx'],
      'rules': {
        'no-unused-vars': ['off'],
        'no-undef': ['off']
      }
    }
  ]
};
