import type { Config } from '@jest/types';

export default {
	verbose: true,
	preset: 'ts-jest',
	transform: {
		'^.+\\.svelte$': [
			'svelte-jester',
			{
				preprocess: true
			}
		],
		'^.+\\.ts$': 'ts-jest',
		'^.+\\.(js|jsx)$': 'babel-jest',
		'.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css'
	},
	moduleFileExtensions: ['js', 'ts', 'svelte'],
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^\\$lib(.*)$': '<rootDir>/src/lib$1'
	},
	setupFiles: ['./jest.setup.ts']
} as Config.InitialOptions;
