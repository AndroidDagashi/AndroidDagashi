import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(
  // Global ignores (from .eslintignore)
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/coverage/**',
      '**/.nuxt/**',
      '.yarn/**',
      'yarn.lock',
    ],
  },

  // Base ESLint recommended rules
  eslint.configs.recommended,

  // TypeScript-ESLint recommended rules (preserving current extends)
  ...tseslint.configs.recommended,

  // Type-aware linting rules for enhanced type safety (only for TS files)
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        // Enable the new project service for faster type-aware linting
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // Disable type-checked rules for JavaScript files
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    extends: [tseslint.configs.disableTypeChecked],
  },

  // Custom rules configuration (preserving current empty rules object)
  {
    rules: {
      // Add any custom rules here if needed in the future
    },
  },

  // Prettier configuration (must be last to override other formatting rules)
  eslintConfigPrettier
)
