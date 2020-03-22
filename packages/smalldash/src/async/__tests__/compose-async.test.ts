// @ts-nocheck
import composeAsync from '../compose-async';

const defer = value =>
  new Promise(resolve => {
    setTimeout(() => resolve(value), 0);
  });

const return1 = 1;
const return2 = 2;
const return3 = 3;

const fn1 = jest.fn().mockImplementation(() => defer(return1));
const fn2 = jest.fn().mockImplementation(() => defer(return2));
const fn3 = jest.fn().mockImplementation(() => defer(return3));

const arg = 0;

describe('functional/composeAsync', () => {
  describe('no functions', () => {
    test('it is a function', () => {
      expect(typeof composeAsync).toBe('function');
    });

    test('it does not throw an error', () => {
      expect(() => composeAsync()).not.toThrow();
    });

    const zeroFunctions = composeAsync();

    test('it returns a function', () => {
      expect(typeof zeroFunctions).toBe('function');
    });

    test('it does not throw an error when curried', () => {
      expect(zeroFunctions).not.toThrow();
    });

    let result;
    beforeEach(async () => {
      result = await zeroFunctions(arg);
    });

    test('it returns the argument passed in', () => {
      expect(result).toBe(arg);
    });
  });

  describe('one function', () => {
    const oneFunction = composeAsync(fn1);
    let result;

    beforeEach(async () => {
      result = await oneFunction(arg);
    });

    test('it calls the first function with the argument', () => {
      expect(fn1).toHaveBeenCalledWith(arg);
    });

    test('it returns the result of the first function', () => {
      expect(result).toBe(return1);
    });
  });

  describe('two function', () => {
    const twoFunctions = composeAsync(fn2, fn1);
    let result;

    beforeEach(async () => {
      result = await twoFunctions(arg);
    });

    test('it calls the first function with the argument', () => {
      expect(fn1).toHaveBeenCalledWith(arg);
    });

    test('it calls the second function with the return of the first', () => {
      expect(fn2).toHaveBeenCalledWith(return1);
    });

    test('it returns the result of the second function', () => {
      expect(result).toBe(return2);
    });
  });

  describe('three function', () => {
    const threeFunctions = composeAsync(fn3, fn2, fn1);
    let result;

    beforeEach(async () => {
      result = await threeFunctions(arg);
    });

    test('it calls the first function with the argument', () => {
      expect(fn1).toHaveBeenCalledWith(arg);
    });

    test('it calls the second function with the return of the first', () => {
      expect(fn2).toHaveBeenCalledWith(return1);
    });

    test('it calls the third function with the return of the second', () => {
      expect(fn3).toHaveBeenCalledWith(return2);
    });

    test('it returns the result of the second function', () => {
      expect(result).toBe(return3);
    });
  });
});
