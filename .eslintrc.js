module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended',
  ],
  rules: {
    'semi': [2, 'never'],
    "comma-dangle": ["error", "always-multiline"],
  },
}
