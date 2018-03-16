import pipeAsync from '../async/pipe-async';
import sideEffects from '../side-effects';

const addSlowly = (timeout) => (value) => {
	return new Promise((res, rej) => {
		setTimeout(() => res(value + 1), timeout);
	});
};

const addOneSlowly = addSlowly(100);

// in practice this is redux state or some similar
// testing adding side effects to an async flow
let mockState = {};

const addValueToState = (value) => {
	mockState = { value };
};

const affectState = sideEffects(addValueToState);

test('create side effect chain on async pipe', async () => {
	mockState = {};

	const grabThirdValue = pipeAsync(addOneSlowly, addOneSlowly, affectState, addOneSlowly);

	try {
		const response = await grabThirdValue(1);
		expect(mockState).toMatchObject({ value: 3 });
		expect(response).toBe(4);
	} catch (e) {
		expect(e).not.toBeInstanceOf(Error);
	}
});
