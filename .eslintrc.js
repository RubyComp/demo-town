// eslint-disable-next-line no-undef
module.exports = {
	'env': {
		'browser': true,
		// 'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		// 'plugin:react/jsx-runtime'
	],
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		// 'indent': [
		// 	'warn',
		// 	'tab',
		// ],
		'indent': [
			'error',
			'tab',
			{'SwitchCase': 1}
		],
		// "indent": ['error', 4, ]

		// 'linebreak-style': [
		// 	'error',
		// 	'unix'
		// ],
		'quotes': [
			'warn',
			'single'
		],
		'semi': [
			'warn',
			'never'
		],
		'no-unused-vars': [
			'warn',
			{ 'varsIgnorePattern': 'VARIABLE_NAME'}
		],
		'react/prop-types': 0,
	}
}
