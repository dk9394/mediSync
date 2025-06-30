# Project setup

Following are the steps or checklist to follow for the project's initial setup.

## Editor config (.editorconfig)

- Use following default settings

```bash
root = true

[*]
indent_style = tab
indent_size = 2
```

- Use following editor settings under .vscode/settings.json

```bash
{
	"editor.detectIndentation": true,
	"editor.useEditorConfig": true,
	"editor.codeActionsOnSave": {
		"source.organizeImports": "explicit"
	},
	"editor.insertSpaces": false,
	"editor.tabSize": 2
}
```

## ESLint linter

- Install ESLint

```bash
ng add @angular-eslint/schematics
```

- Add following script in package.json

```bash
"format": "npx eslint . --fix"
```

## Prettier formatter

- Install prettier

```bash
npm i -D prettier eslint-plugin-prettier eslint-config-prettier

```

- Download IDE prettier extension
- Use following default settings in .prettierrc

```bash
{
	"semi": true,
	"singleQuote": true,
	"useTabs": true,
	"tabWidth": 2,
	"trailingComma": "es5",
	"printWidth": 100
}
```

- Following prettier specific settings in eslint.config.js file, to keep the local prettier rules and eslint rules in sync.

```bash
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...(prettierPlugin.configs?.recommended?.[0]?.rules ?? {}),
    },
  },
  {
    rules: {
      ...prettierConfig.rules,
    },
  },
];
```

- Add following script in package.json

```bash
"format": "npx prettier . --write"
```

## lint-staged

- Install lint-staged

```bash
npm i -D lint-staged
```

- Add following code to package.json

```bash
"lint-staged": {
	"*.{ts,js,json,html,css,scss}": [
		"eslint --fix",
		"prettier --write"
	]
}
```

## Husky

- Install husky

```bash
npm i -D husky
```

- Add script in package.json

```bash
"prepare": "husky install"
```

- Initialize husky

```bash
npx husky init
```

- Add pre-commit hook

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/husky.sh"

npx lint-staged
```

- Add pre-push hook

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/husky.sh"

protected_branches=('main' 'master'); current_branch=$(git rev-parse --abbrev-ref HEAD); for branch in "${protected_branches[@]}"; do if [ "$current_branch" = "$branch" ]; then echo '🚫 Direct push to '$branch' is not allowed! Please use a pull request.'; exit 1; fi; done
```

## Development server

To start a local development server, run:

```bash
ng serve
```
