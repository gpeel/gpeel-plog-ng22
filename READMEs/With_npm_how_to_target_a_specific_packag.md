### Target a specific `package.json` with npm version

`npm version` doesn't have a `--file` flag, but you can use `--prefix` to point to the directory containing the target `package.json`:

```bash
npm version patch --no-git-tag-version --prefix ./projects/my-lib
```

This will update `projects/my-lib/package.json` without touching the root one.

#### Alternative: use `npm pkg` (npm 8+)

For even more control, you can read/set the version directly:

```bash
# Read current version
npm pkg get version --prefix ./projects/my-lib

# Set an explicit version
npm pkg set version=1.2.3 --prefix ./projects/my-lib
```

Note: `npm pkg set` won't auto-increment — you'd need to specify the exact version. Use `npm version --prefix` if you want automatic patch/minor/major bumping.