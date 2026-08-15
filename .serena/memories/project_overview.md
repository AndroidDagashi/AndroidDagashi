# AndroidDagashi Project Overview

## Purpose

AndroidDagashi is a GitHub repository automation project that manages milestone creation for the AndroidDagashi organization. It automatically creates new milestones when existing ones are closed.

## Tech Stack

- **Language**: TypeScript
- **Runtime**: Node.js (version pinned in `mise.toml`)
- **Package Manager**: Yarn v4 with workspaces, provisioned by mise via
  `npm:@yarnpkg/cli-dist` (corepack is no longer bundled with Node.js 25+)
- **Toolchain Manager**: mise (`mise.toml`), also used in CI via `jdx/mise-action`
- **Build Tool**: tsx for TypeScript execution
- **API Integration**: GitHub API via @octokit/rest
- **CI/CD**: GitHub Actions

## Project Structure

- Monorepo setup using Yarn workspaces
- Main package: `packages/new-milestone` - Contains the milestone generation logic
- GitHub Actions workflow that triggers on milestone close or manual dispatch
