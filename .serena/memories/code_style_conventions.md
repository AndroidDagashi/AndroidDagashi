# Code Style and Conventions

## TypeScript Configuration

- Target: ES2018
- Module: CommonJS (root), ESModule (packages/new-milestone)
- Strict mode enabled
- ESModuleInterop enabled
- Resolve JSON modules enabled

## Linting Rules

- ESLint with TypeScript plugin
- Extends: eslint:recommended, @typescript-eslint/recommended, prettier
- Parser: @typescript-eslint/parser

## Formatting Rules (Prettier)

- Arrow functions: Always use parentheses
- Bracket spacing: true
- Print width: 80 characters
- Semicolons: false (no semicolons)
- Quotes: single quotes
- Tab width: 2 spaces
- Trailing comma: ES5 style

## Naming Conventions

- Constants: UPPER_SNAKE_CASE (e.g., OWNER, REPO)
- Files: kebab-case for configs, camelCase for TypeScript files
- Variables and functions: camelCase

## Code Patterns

- Use async/await for asynchronous operations
- Type imports from libraries (e.g., from @octokit/rest)
- Non-null assertions with eslint-disable comments when necessary
