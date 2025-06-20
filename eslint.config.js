import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';

export default [
    { ignores: ['dist', 'node_modules'] },

    tseslint.configs.base,
    tseslint.configs.recommendedTypeChecked,

    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.json',
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
            globals: {
                ...globals.browser,
                ...globals.es2021,
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            prettier,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,

            // --- React-specific ---
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/jsx-uses-vars': 'error',
            'react/jsx-pascal-case': 'error',
            'react/jsx-no-duplicate-props': 'error',
            'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
            'react/jsx-indent': ['error', 2],

            // --- TS-specific ---
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'warn',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

            // --- General ---
            'no-console': ['error', { allow: [] }],
            'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

            // --- Prettier (optional) ---
            'prettier/prettier': 'warn',
        },
    },
];
