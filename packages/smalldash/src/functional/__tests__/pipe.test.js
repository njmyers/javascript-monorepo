import pipe from '../pipe';
import stackTrace from 'stack-trace';

describe('it works as a functional pipe', () => {
  test('it is a function ', () => {
    expect(typeof pipe).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(() => pipe()).not.toThrow();
    expect(() => pipe()()).not.toThrow();
  });

  test('it only uses one stack frame regardless of depth', () => {
    const returnSelf = (arg) => arg;
    const returnError = () => {
      try {
        throw new Error();
      } catch (e) {
        return e;
      }
    };

    const error = pipe(
      returnSelf,
      returnSelf,
      returnSelf,
      returnSelf,
      returnSelf,
      returnSelf,
      returnSelf,
      returnSelf,
      returnError
    )(null);

    const pipeStack = stackTrace
      .parse(error)
      .filter((frame) => /pipe\.js|run-stack\.js/.test(frame.fileName));

    expect(pipeStack.length).toBe(2);
  });

  test('it auto-curries arguments', () => {
    const addOne = (x) => x + 1;

    expect(
      pipe(
        addOne,
        addOne,
        addOne
      )(0)
    ).toBe(3);
  });

  test('it works left to right (top down)', () => {
    const obj = { a: 1 };

    const renameAToB = (obj) => ({ b: obj.a });
    const renameBToC = (obj) => ({ c: obj.b });
    const renameCToD = (obj) => ({ d: obj.c });

    expect(
      pipe(
        renameAToB,
        renameBToC,
        renameCToD
      )(obj)
    ).toMatchObject({ d: 1 });
  });
});
