'use strict';

import sinon from 'sinon';
import debounce from 'lodash/debounce';

let clock;

beforeEach(() => {
	clock = sinon.useFakeTimers();
});

afterEach(() => {
	clock.restore();
});

test('basic debounce testing', () => {
	const callback = sinon.spy();
	const debounced = debounce(callback, 1000);

	debounced();
	debounced();
	debounced();
	debounced();
	debounced();
	debounced();

	sinon.assert.notCalled(callback);

	clock.tick(999);

	sinon.assert.notCalled(callback);

	clock.tick(1);

	sinon.assert.calledOnce(callback);

	clock.tick(10000);

	sinon.assert.calledOnce(callback);
});

test('multiple debounces testing', () => {
	const callback = sinon.spy();
	const debounced = debounce(callback, 1000);

	debounced();
	debounced();
	debounced();
	debounced();
	debounced();
	debounced();

	clock.tick(999);

	sinon.assert.notCalled(callback);

	clock.tick(1);

	sinon.assert.calledOnce(callback);

	debounced();
	debounced();
	debounced();
	debounced();
	debounced();
	debounced();

	clock.tick(999);

	sinon.assert.calledOnce(callback);

	clock.tick(1);

	sinon.assert.calledTwice(callback);
});

// test('leading testing', () => {
// 	const callback = sinon.spy();
// 	const debounced = debounce(callback, 1000, true);

// 	debounced();
// 	debounced();
// 	debounced();
// 	debounced();
// 	debounced();
// 	debounced();

// 	clock.tick(999);

// 	sinon.assert.calledOnce(callback);

// 	clock.tick(10);

// 	sinon.assert.calledTwice(callback);
// });

// test('debounce context testing', () => {
// 	class Test {
// 		constructor() {
// 			this.name = 'Nick';
// 			this.debouncedGetName = debounce(this.getName.bind(this), 1000);
// 		}

// 		getName() {
// 			return this.name;
// 		}
// 	}

// 	const object = new Test();

// 	expect(object.getName()).toBe('Nick');

// 	const name = object.debouncedGetName();

// 	expect(name).toBe(undefined);

// 	clock.tick(2000);

// 	expect(name).toBe('Nick');
// });
