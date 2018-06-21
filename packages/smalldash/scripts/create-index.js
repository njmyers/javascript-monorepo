const fs = require('fs');
const chalk = require('chalk');
const { basename, resolve } = require('path');
const camelCase = require('camelcase');

function isFile(file) {
	return fs.statSync(file).isFile();
}

/**
 * recursively read directory structure
 * @param  {string} dir directory to read
 * @return {array}     array of file paths
 */
const readDirectoryKeys = (dir) => {
	const contents = fs.readdirSync(dir);
	const files = contents
		.map((name) => {
			const filePath = `${dir}/${name}`;
			const file = isFile(filePath);

			return !file
				? name !== '__tests__' ? [filePath, ...readDirectoryKeys(filePath)] : undefined
				: name !== 'index.js' ? filePath : undefined;
		})
		// removed undefined
		.filter((val) => val !== undefined);

	return files;
};

const functionName = (path) => {
	const base = basename(path);
	return camelCase(base.slice(0, base.length - 3));
};

const relativePath = (path) => {
	const base = basename(path);
	return `'./${base.slice(0, base.length - 3)}'`;
};

const createStrings = (keys) => {
	const stringed = keys.map((path, index) => {
		return Array.isArray(path)
			? createStrings(path)
			: index === 0
				? path + '/index.js'
				: `export { default as ${functionName(path)} } from ${relativePath(path)};`;
	});

	return stringed;
};

const writeFiles = (strings) => {
	let path = '';
	let file = '';

	strings.forEach((string, index) => {
		if (Array.isArray(string)) writeFiles(string);
		else {
			if (index === 0) path = string;
			else file += string + '\n';
		}
	});

	if (path) fs.writeFileSync(path, file, 'utf8');
};

writeFiles(createStrings(readDirectoryKeys(resolve(process.cwd(), 'src'))));
