# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AndroidDagashi is a GitHub automation project that manages milestone creation for the AndroidDagashi organization. When a milestone is closed, it automatically creates a new one with a due date 7 days later.

## Key Commands

### Development Setup

```bash
mise install              # Install Node.js and Yarn as pinned in mise.toml
yarn install              # Install all dependencies
```

### Code Quality

```bash
yarn lint                 # Run ESLint and Prettier checks
yarn format              # Fix ESLint and Prettier issues
```

### Milestone Generation

```bash
yarn milestone:generate   # Create new milestone (requires PUSH_ACCESS_TOKEN)
yarn milestone:buildcheck # Verify TypeScript compilation
```

## Architecture

Node.js and Yarn are both provisioned by [mise](https://mise.jdx.dev/) from `mise.toml`.
Yarn comes from the npm backend (`npm:@yarnpkg/cli-dist`) because corepack is no longer
bundled with Node.js 25+; keep that version in sync with `packageManager` in the root
`package.json`.

The project is a Yarn 4 workspace monorepo:

- **packages/new-milestone**: Core milestone generation logic
  - `index.ts`: Main script that checks for open milestones and creates new ones
  - Uses `tsx` to run TypeScript directly
  - Dependencies: `@octokit/rest` (GitHub API), `date-fns` (date calculations)
  - Requires `PUSH_ACCESS_TOKEN` environment variable

## Code Standards

- **No semicolons**: Prettier is configured to omit semicolons
- **Single quotes**: Use single quotes for strings
- **Trailing commas**: ES5-compatible trailing commas
- **TypeScript strict mode**: All strict checks are enabled
- **ESLint**: Flat config with TypeScript plugin and Prettier integration
- **Line width**: 80 characters maximum

## GitHub Actions

The `.github/workflows/new_milestone.yml` workflow:

- Triggers on milestone closure or manual dispatch
- Runs on Ubuntu with Node.js and Yarn provisioned by `jdx/mise-action` from `mise.toml`
- Caches the Yarn package cache with `actions/cache`
- Executes `yarn milestone:generate` with required token
