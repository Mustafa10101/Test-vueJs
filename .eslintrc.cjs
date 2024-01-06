/* eslint-env node */
// require('@rushstack/eslint-patch/modern-module-resolution')

// module.exports = {
//   root: true,
//   extends: [
//     'plugin:vue/vue3-essential',
//     'eslint:recommended',
//     '@vue/eslint-config-prettier/skip-formatting',
//     'plugin:@typescript-eslint/recommended' // Добавить это для TypeScript
//   ],
//   parserOptions: {
//     ecmaVersion: 'latest',
//     parser: '@typescript-eslint/parser' // Указать парсер для TypeScript
//   },
//   plugins: [
//     '@typescript-eslint' // Добавить плагин TypeScript
//   ]
// }

/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
    //'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['@typescript-eslint']
}
