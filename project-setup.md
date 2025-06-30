# Project setup

Following are the steps or checklist to follow for the project's initial setup.

## Editor config (.editorconfig)

- Use following default settings

```bash
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

## Prettier (.prettierrc)

- Install prettier

```bash
npm i -D prettier
```

- Download IDE prettier extension
- Use following default settings

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

- Add following script in package.json

```bash
"format": "npx prettier . --write"
```

## ESLint

- Install ESLint

```bash
ng add @angular-eslint/schematics
```

- Add following script in package.json

```bash
"format": "npx eslint . --fix"
```

## Development server

To start a local development server, run:

```bash
ng serve
```
