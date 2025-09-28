# Development Commands

## Install Dependencies

```bash
yarn install
```

## Linting and Formatting

### Run both ESLint and Prettier checks

```bash
yarn lint
```

### Fix linting and formatting issues

```bash
yarn format
```

### Individual linting commands

```bash
yarn lint:eslint    # Check ESLint issues
yarn lint:prettier  # Check Prettier formatting
```

### Individual formatting commands

```bash
yarn format:eslint   # Fix ESLint issues
yarn format:prettier # Fix Prettier formatting
```

## Milestone Generation

### Generate new milestone (requires PUSH_ACCESS_TOKEN env var)

```bash
yarn milestone:generate
```

### Check TypeScript compilation for milestone package

```bash
yarn milestone:buildcheck
```

## Package-specific commands (from root)

```bash
yarn workspace new-milestone generate
yarn workspace new-milestone buildcheck
```
