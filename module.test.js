import * as library from './module';

test('library exports correctly', () => {
	console.log(library);
	console.log(library.obj);

	expect(5).toBe(5);
});
