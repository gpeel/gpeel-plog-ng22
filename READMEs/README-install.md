# My Usual setting for Angular 22

Here is a description of what was added to this project.

## eslint settings

Since ng1, and still not included in ng22, we have to add eslint with:

        ng add @angular-eslint/schematics

## eslint rules

https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md


## Webstorm

- activate Eslint Automatic config + fix on save option
- and disable tslint !
- Go to Tools -> Actions On Save and check - reformat Code, Optimize Imports, Rearrange Code Run code cleanup and run
  eslint --fix

#### Your README section could become

## bump for library version upgrade


```
    npm version patch --no-git-tag-version
    npm version minor --no-git-tag-version
    npm version major --no-git-tag-version
```

No extra install needed — it's built into npm.

#### Option 2: `copyfiles` (simple, well-known)

```bash
npm install -D copyfiles
```

```json
"cpSources_3": "copyfiles -u 4 -V \"./projects/gpeel/plog/src/**/*.*\" ./dist/gpeel/plog/src"
```
> `-u 4` strips the first 4 directory levels (`projects/gpeel/plog/src`) so files land correctly. `-V` enables verbose output (like your `-v`).

