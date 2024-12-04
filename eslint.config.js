import { fileURLToPath } from 'node:url';

import { includeIgnoreFile } from '@eslint/compat';
import vnphanquang from '@vnphanquang/eslint-config';
import jsdoc from 'eslint-plugin-jsdoc';
import svelte from 'eslint-plugin-svelte';
import ts from 'typescript-eslint';
const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

const svelteConfig = [
	...svelte.configs['flat/recommended'],
	...svelte.configs['flat/prettier'],
	{
		files: ['**/*.svelte'],

		languageOptions: {
			parserOptions: {
				parser: ts.parser,
			},
		},
	},
];

const jsdocConfig = [
	{
		files: ['packages/**/*.js'],
		...jsdoc.configs['flat/recommended-typescript-flavor'],
	},
];

export default ts.config(
	includeIgnoreFile(gitignorePath),
	...vnphanquang,
	...svelteConfig,
	...jsdocConfig,
);
