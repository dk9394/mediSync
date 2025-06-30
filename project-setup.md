# Project setup

Following are the steps or checklist to follow for the project's initial setup.

## Editor config (.editorconfig)

- Use following default settings

```bash
[*]
charset = utf-8
indent_style = tab
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true
```

- Force IDE to follow settings from .editorconfig

```bash
{
	"editor.detectIndentation": true,
	"editor.useEditorConfig": true, // Force to use settings from .editorconfig
	"editor.codeActionsOnSave": {
		"source.organizeImports": "explicit" // organise imports
	},
	"typescript.tsserver.watchOptions": "vscode",
	"editor.quickSuggestions": {
		"strings": true
	},
	"editor.insertSpaces": true,
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
	"printWidth": 120
}
```

## ESLint

- Install ESLint

```bash
ng add @angular-eslint/schematics
```

## Development server

To start a local development server, run:

```bash
ng serve
```
