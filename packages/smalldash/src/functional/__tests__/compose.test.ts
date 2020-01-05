import compose from '../compose';

const ARG = 0;
const RETURN = 1;

describe('functional/compose', () => {
  describe('type check', () => {
    test('it is a function', () => {
      expect(typeof compose).toBe('function');
    });

    test('it returns a function', () => {
      expect(typeof compose()).toBe('function');
    });
  });

  describe('no functions', () => {
    test('it does not throw an error', () => {
      expect(() => compose()).not.toThrow();
    });

    const noArguments = compose();

    test('it does not throw an error when curried', () => {
      expect(() => noArguments()).not.toThrow();
    });

    test('it defaults to identity function', () => {
      expect(noArguments(ARG)).toBe(ARG);
    });
  });

  describe('single function', () => {
    const fn = jest.fn();
    const singleFunction = compose(fn);

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
    const multipleFunctions = compose(...fns);

    beforeEach(() => {
      fns.forEach(fn => {
        fn.mockClear();
        fn.mockReturnValue(RETURN);
      });

      multipleFunctions(ARG);
    });

    test('it calls the second with the argument', () => {
      expect(fn2).toHaveBeenCalledWith(ARG);
    });

    test('it calls the first with the return of the second', () => {
      expect(fn1).toHaveBeenCalledWith(RETURN);
    });

    test('it returns the value', () => {
      expect(fn1).toHaveReturnedWith(RETURN);
    });

    test('it returns the value', () => {
      expect(fn2).toHaveReturnedWith(RETURN);
    });
  });
});
