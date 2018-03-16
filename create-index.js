const fs = require('fs');
const chalk = require('chalk');
const path = require('path');
const camelCase = require('camelcase');

function isFile(file) {
	return fs.statSync(file).isFile();
}

/**
 * recursively read directory structure
 * @param  {string} dir directory to read
 * @return {array}     array of file paths
 */
function readDirectoryKeys(dir) {
	try {
		const names = fs.readdirSync(dir);
		const files = names
			.map((name) => {
				const filePath = `${dir}/${name}`;
				if (isFile(filePath)) {
					if (name !== 'index.js') return name;
				} else if (name !== '__tests__') return [dir, ...readDirectoryKeys(filePath)];
			})
			.filter((val) => val !== undefined);

		return files;
	} catch (e) {
		throw e;
	}
}

const keys = readDirectoryKeys(path.resolve(__dirname, 'src'));

console.log(keys);

const writeIndex = (keys) => {
	let indexPath;
	let string = '';

	keys.forEach((filePath, index) => {
		if (Array.isArray(filePath)) writeIndex(filePath);
		if (index === 0) indexPath = item;
		string += 'export { default } as ' + camelCase(name) + 'from ./' + filePath;
	});

	fs.writeFileSync(indexPath, string, 'utf8');
};

writeIndex(keys);
