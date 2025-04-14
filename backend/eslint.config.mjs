import importPlugin from 'eslint-plugin-import';

export default [
  {
    ignores: ['node_modules/**'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021, // Sử dụng ES2021
      sourceType: 'module', // Hỗ trợ import/export
      globals: {
        require: 'readonly', // Định nghĩa các biến toàn cục
        process: 'readonly',
        module: 'readonly',
        console: 'readonly',
        __dirname: 'readonly',
      },
    },
    plugins: {
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.json'], // Hỗ trợ các file .js và .json
        },
      },
    },
    rules: {
      'import/no-unresolved': 'error', // Báo lỗi nếu import sai hoặc thiếu
      'import/named': 'error', // Kiểm tra các export được sử dụng đúng cách
      'import/namespace': 'error',
      'import/default': 'error',
      'import/export': 'error',
      'import/first': 'error',
      'import/no-extraneous-dependencies': 'error', // Báo lỗi nếu sử dụng module chưa được import
      'no-undef': 'error', // Báo lỗi nếu biến chưa được định nghĩa
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];