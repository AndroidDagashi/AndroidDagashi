# Task Completion Checklist

When completing any coding task in this repository, always:

1. **Run linting** to check for issues:
   ```bash
   yarn lint
   ```

2. **Fix any linting/formatting issues**:
   ```bash
   yarn format
   ```

3. **Verify TypeScript compilation** (if working on new-milestone package):
   ```bash
   yarn milestone:buildcheck
   ```

4. **Test the functionality** (if applicable):
   - For milestone generation changes, ensure the script runs without errors
   - Check that environment variables are properly handled

5. **Review changes** to ensure:
   - Code follows the established patterns
   - No hardcoded values that should be environment variables
   - No sensitive information in code
   - Proper error handling is in place