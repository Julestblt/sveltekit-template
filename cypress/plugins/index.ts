/// <reference types="cypress" />

module.exports = (on) => {
	// @bahmutov/cy-rollup is already a dependency of cypress-svelte-unit-test
	const filePreprocessor = require('@bahmutov/cy-rollup');
	on('file:preprocessor', filePreprocessor());
};
