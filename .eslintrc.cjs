module.exports = {
  ignorePatterns: [
    '**/public/**',
    '**/.cache/**',
    '**/static/**',
    '**/content/**',
    '**/plugins/**',
  ],
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'airbnb/hooks',
    'airbnb',
  ],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
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
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      env: {
        browser: true,
        es6: true,
      },
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript',
        'prettier',
      ],
      plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'prettier',
      ],
      rules: {
        '@typescript-eslint/no-unsafe-enum-comparison': 'off',
        'react/require-default-props': 'off',
        'react/prop-types': 'off',
        'react/no-array-index-key': 'off',
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      env: {
        browser: true,
        es6: true,
      },
      extends: ['prettier'],
      plugins: [
        'react',
        'react-hooks',
        'prettier',
      ],
    },
  ],
};
