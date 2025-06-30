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
"lint": "eslint",
"lint:fix": "npx eslint . --fix"
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

## Jest

- Uninstall Jasmine & Karma

```bash
npm uninstall karma karma-jasmine jasmine-core karma-chrome-launcher karma-coverage karma-jasmine-html-reporter @types/jasmine
```

- Install Jest

```bash
npm install --save-dev jest jest-preset-angular @types/jest ts-jest ts-node
```

- Create setup-jest.ts at root level and add the following line.

```bash
import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv();
```

- Create jest.config.cjs at root level and add the following code.

```bash
module.exports = {
	preset: 'jest-preset-angular',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
	testMatch: ['**/+(*.)+(spec).+(ts)'],
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageReporters: ['json', 'lcov', 'text', 'html', 'text-summary'],
	collectCoverageFrom: [
		'src/**/*.ts',
		'!src/**/*.module.ts', // ⬅ Exclude Angular modules
		'!src/main.ts',
		'!src/**/*.config.ts',
		'!src/**/*.routes.ts',
	],
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 90,
			lines: 90,
			statements: 90,
		},
	},
};
```

- Add "type": "module" in package.json

- Replace "types": ["jasmine"] with "types": ["jest"] in tsconfig.spec.json file

- Replace builder property as shown below in angular.json file with "@angular-builders/jest:run"

```bash
"test": {
	"builder": "@angular-devkit/build-angular:karma",
	"options": {
		...
	}
}
```

- Clear node_modules and package-lock.json file and run npm install

```bash
rm -rf node_modules package-lock.json
npm install
```

- Add following scripts in package.json

```bash
"test": "jest",
"test:watch": "jest --watch",
"test:coverage": "jest --coverage",
```

- Add Jest Runner extension to run tests directly from the spec.ts file

## lint-staged

- Install lint-staged

```bash
npm i -D lint-staged
```

- Add following code to package.json

```bash
"lint-staged": {
	"*.{ts,js,json,html,css,scss,md}": [
		"eslint --fix",
		"prettier --write"
	],
	"*.{ts,js}": [
		"npm run test:coverage"
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
