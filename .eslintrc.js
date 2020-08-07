module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'jest',
  ],
  rules: {
    'react/state-in-constructor': [2, 'never'],
    'import/no-unresolved': 'off',
    'react/prefer-stateless-function': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'import/extensions': [2, { extensions: ['.ts', '.tsx', '.js', '.jsx'] }],
    'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx', '.js', '.jsx'] }],
  },
};
