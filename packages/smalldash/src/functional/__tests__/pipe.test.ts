import pipe from '../pipe';

const increment = a => a + 1;
const square = a => Math.pow(a, 2);

describe('functional/pipe', () => {
  test('it is a function', () => {
    expect(typeof pipe).toBe('function');
  });

  test('it returns a function', () => {
    expect(typeof pipe()).toBe('function');
  });

  test('it pipes together multiple functions', () => {
    const addThree = pipe(
      increment,
      increment,
      increment
    );

    expect(addThree(0)).toBe(3);
  });

  test('it executes functions from left to right', () => {
    const addTwoAndSquare = pipe(
      increment,
      increment,
      square
    );

    expect(addTwoAndSquare(0)).toBe(4);
  });
});
