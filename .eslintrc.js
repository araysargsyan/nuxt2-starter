module.exports = {
   root: true,
   env: {
      browser: true,
      node: true,
   },
   extends: [
      '@nuxtjs/eslint-config-typescript',
      'plugin:nuxt/recommended',
      'prettier',
   ],
   plugins: [ 'prettier' ],
   rules: {
      'indent': [ 'error', 3, {} ],
      'semi': [ 'error', 'always' ],
      'quotes': [ 'error', 'single', { avoidEscape: true } ],
      'object-curly-spacing': [ 'error', 'always' ],
      'array-bracket-spacing': [ 'error', 'always' ],
      'space-in-parens': [ 'error', 'always' ],
      'jsx-quotes': [ 'error', 'prefer-double' ],
   },
   overrides: [
      {
         files: [ '**/*.vue', '*.vue' ],
         rules: {
            // 'prettier/prettier': [ 'error' ],
            'indent': 'off',
            'vue/multi-word-component-names': [
               'error',
               {
                  ignores: [ 'Default', 'Error', 'Custom' ],
               },
            ],
            'vue/component-name-in-template-casing': [ 'error', 'kebab-case' ],
            'vue/script-indent': [
               'error',
               3,
               {
                  baseIndent: 1,
                  switchCase: 1,
               },
            ],
            'vue/html-indent': [
               'error',
               2,
               {
                  attribute: 2,
                  baseIndent: 2,
                  closeBracket: 0,
                  alignAttributesVertically: true,
               },
            ],
         },
      },
   ],
};
