// eslint-disable-next-line no-undef
module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
	},
	"extends": [
		"react-app",
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true,
		},
		"ecmaVersion": "latest",
		"sourceType": "module",
	},
	"plugins": [
		"react",
		"@typescript-eslint",
		"prettier"
	],
	"prettier/prettier": [
		"error",
		{
			"semi": false,
			"endOfLine": "auto",
			"arrowParens": 'always',
		},
	],
	"rules": {
		"indent": [
			"error",
			"tab",
		],
		"linebreak-style": [
			"error",
			"unix",
		],
		"max-len": ["warn", { "code": 108 }],
		"semi": 0,
		"comma-dangle": ["error", "always-multiline"],
	},
}
