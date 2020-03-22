// @ts-nocheck
import compose from '../compose';

const return1 = 1;
const return2 = 2;
const return3 = 3;

const fn1 = jest.fn().mockReturnValue(return1);
const fn2 = jest.fn().mockReturnValue(return2);
const fn3 = jest.fn().mockReturnValue(return3);

const arg = 0;

describe('functional/compose', () => {
  describe('no functions', () => {
    test('it is a function', () => {
      expect(typeof compose).toBe('function');
    });

    test('it does not throw an error', () => {
      expect(() => compose()).not.toThrow();
    });

    const zeroFunctions = compose();

    test('it returns a function', () => {
      expect(typeof zeroFunctions).toBe('function');
    });

    test('it does not throw an error when curried', () => {
      expect(zeroFunctions).not.toThrow();
    });

    test('it returns the argument passed in', () => {
      expect(zeroFunctions(arg)).toBe(arg);
    });
  });

  describe('one function', () => {
    const oneFunction = compose(fn1);
    let result;

    beforeEach(() => {
      result = oneFunction(arg);
    });

    test('it calls the first function with the argument', () => {
      expect(fn1).toHaveBeenCalledWith(arg);
    });

    test('it returns the result of the first function', () => {
      expect(result).toBe(return1);
    });
  });

  describe('two function', () => {
    const twoFunctions = compose(fn2, fn1);
    let result;

    beforeEach(() => {
      result = twoFunctions(arg);
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
    const threeFunctions = compose(fn3, fn2, fn1);
    let result;

    beforeEach(() => {
      result = threeFunctions(arg);
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
