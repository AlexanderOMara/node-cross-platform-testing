'use strict';

async function main() {
	console.log("resolve('.'):");
	console.log(resolve('.'));
	console.log('');
	console.log("resolve('./', 'file.txt'):");
	console.log(resolve('./', 'file.txt'));
	console.log('');
	console.log("resolve('../', 'file.txt'):");
	console.log(resolve('../', 'file.txt'));
	console.log('');
}
main().catch(err => {
	process.exitCode = 1;
	console.error(err);
});
