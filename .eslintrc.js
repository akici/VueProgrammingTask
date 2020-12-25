module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/prefer-default-export': 'off',
    'import/no-mutable-exports': 'off',
    'lines-between-class-members': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-cycle': 'off',
    'class-methods-use-this': 'off',
  },
};
