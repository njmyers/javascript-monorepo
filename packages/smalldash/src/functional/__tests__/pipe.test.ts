import pipe from '../pipe';

const ARG = 0;
const RETURN = 1;

describe('functional/pipe', () => {
  describe('type check', () => {
    test('it is a function', () => {
      expect(typeof pipe).toBe('function');
    });

    test('it returns a function', () => {
      expect(typeof pipe()).toBe('function');
    });
  });

  describe('no functions', () => {
    test('it does not throw an error', () => {
      expect(() => pipe()).not.toThrow();
    });

    const noArguments = pipe();

    test('it does not throw an error when curried', () => {
      expect(() => noArguments()).not.toThrow();
    });

    test('it defaults to identity function', () => {
      expect(noArguments(ARG)).toBe(ARG);
    });
  });

  describe('single function', () => {
    const fn = jest.fn();
    const singleFunction = pipe(fn);

    beforeEach(() => {
      fn.mockClear();
      fn.mockReturnValue(RETURN);
      singleFunction(ARG);
    });

    test('it calls with the argument', () => {
      expect(fn).toHaveBeenCalledWith(ARG);
    });

    test('it returns the value', () => {
      expect(fn).toHaveReturnedWith(RETURN);
    });
  });

  describe('multiple function', () => {
    const fn1 = jest.fn();
    const fn2 = jest.fn();
    const fns = [fn1, fn2];
    const multipleFunctions = pipe(...fns);

    beforeEach(() => {
      fns.forEach(fn => {
        fn.mockClear();
        fn.mockReturnValue(RETURN);
      });

      multipleFunctions(ARG);
    });

    test('it calls the first with the argument', () => {
      expect(fn1).toHaveBeenCalledWith(ARG);
    });

    test('it calls the second with the return of the first', () => {
      expect(fn2).toHaveBeenCalledWith(RETURN);
    });

    test('it returns the value', () => {
      expect(fn1).toHaveReturnedWith(RETURN);
    });

    test('it returns the value', () => {
      expect(fn2).toHaveReturnedWith(RETURN);
    });
  });
});
