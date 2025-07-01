# Common git commands

## Last commit reset

- Locally reset last commit. Commit will be deleted from the history and all changed file will shown as staged files.

```bash
git reset --soft HEAD~1
```

- fatal: Need to specify how to reconcile divergent branches.

```bash
git config pull.rebase false
```

## Merge conflicts in main branch (Here dev is preview)

If pre-push hook added to not to direct merge to dev and main branches.

### Strategy: Resolve Conflicts Using a Temporary Feature Branch

```bash
git checkout dev
git pull origin dev

git checkout -b resolve/dev-main-conflicts

git pull origin main

git commit -m "Resolve conflicts between dev and main"
git push origin resolve/dev-main-conflicts
```

- If merge conflict in package-lock.json too. First, fix the merge conflicts from package.json file and other files. Then, remove package-lock.json and run `npm install` and commit the changes.
- Create a PR from your temporary branch into dev.
- Once that PR is merged into dev, the original PR from dev → main will now be conflict-free.
