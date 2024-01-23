// const RULES = {
//   OOF: 'off',
//   WARN: 'warn',
//   ERROR: 'error'
// }

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    // 'react/react-in-jsx-scope': RULES.off,
    // 'react/prop-types': RULES.off
    // 'eslintspace-before-function-paren': RULES.off
  }
}
