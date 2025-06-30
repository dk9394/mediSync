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

## Development server

To start a local development server, run:

```bash
ng serve
```
