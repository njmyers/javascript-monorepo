import compose from '../compose';

const increment = a => a + 1;
const square = a => Math.pow(a, 2);

describe('functional/compose', () => {
  test('it is a function', () => {
    expect(typeof compose).toBe('function');
  });

  test('it returns a function', () => {
    expect(typeof compose()).toBe('function');
  });

  test('it composes together multiple functions', () => {
    const addThree = compose(
      increment,
      increment,
      increment
    );

    expect(addThree(0)).toBe(3);
  });

  test('it executes functions from right to left', () => {
    const addTwoAndSquare = compose(
      square,
      increment,
      increment
    );

    expect(addTwoAndSquare(0)).toBe(4);
  });
});
