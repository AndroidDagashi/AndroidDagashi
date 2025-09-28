# AndroidDagashi Project Overview

## Purpose

AndroidDagashi is a GitHub repository automation project that manages milestone creation for the AndroidDagashi organization. It automatically creates new milestones when existing ones are closed.

## Tech Stack

- **Language**: TypeScript
- **Runtime**: Node.js
- **Package Manager**: Yarn v4 with workspaces
- **Build Tool**: tsx for TypeScript execution
- **API Integration**: GitHub API via @octokit/rest
- **CI/CD**: GitHub Actions

## Project Structure

- Monorepo setup using Yarn workspaces
- Main package: `packages/new-milestone` - Contains the milestone generation logic
- GitHub Actions workflow that triggers on milestone close or manual dispatch
