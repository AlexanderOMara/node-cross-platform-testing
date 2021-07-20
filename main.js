'use strict';

const path = require('path');

async function main() {
	console.log("path.resolve('.'):");
	console.log(path.resolve('.'));
	console.log('');
	console.log("path.resolve('./', 'file.txt'):");
	console.log(path.resolve('./', 'file.txt'));
	console.log('');
	console.log("path.resolve('../', 'file.txt'):");
	console.log(path.resolve('../', 'file.txt'));
	console.log('');
}
main().catch(err => {
	process.exitCode = 1;
	console.error(err);
});
