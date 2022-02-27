module.exports = {
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended',
  ],
  rules: {
    'semi': [2, 'never'],
    'comma-dangle': ['error', 'always-multiline'],
  },
}
