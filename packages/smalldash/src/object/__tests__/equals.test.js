import equals from '../equals';

describe('tests for different equalities', () => {
  test('primitives equal', () => {
    expect(equals('s', 's')).toBe(true);
  });

  test("primitives don't equal", () => {
    expect(equals('s', 'sa')).toBe(false);
  });

  test('objects equal', () => {
    const object = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 4,
        },
      },
    };

    const same = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 4,
        },
      },
    };

    expect(equals(same, object)).toBe(true);
  });

  test("objects don't equal", () => {
    const object = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 4,
        },
      },
    };

    const same = {
      a: 1,
      b: {
        c: 2,
        d: {
          // this line is different
          e: 5,
        },
      },
    };

    expect(equals(same, object)).toBe(false);
  });

  test('arrays equal', () => {
    const arr = [0, 1, 2, 3, 4, 5];
    const same = [0, 1, 2, 3, 4, 5];

    expect(equals(arr, same)).toBe(true);
  });

  test("arrays don't equal", () => {
    const arr = [0, 1, 2, 3, 4, 6];
    const same = [0, 1, 2, 3, 4, 5];

    expect(equals(arr, same)).toBe(false);
  });

  test('nested arrays equal', () => {
    const arr = [0, 1, 2, 3, [4, [[5, 6], 6]]];
    const same = [0, 1, 2, 3, [4, [[5, 6], 6]]];

    expect(equals(arr, same)).toBe(true);
  });

  test("nested arrays don't equal", () => {
    const arr = [0, 1, 2, 3, [4, [[5, 6], 6]]];
    const same = [0, 1, 2, 3, [4, [[5, 5], 6]]];

    expect(equals(arr, same)).toBe(false);
  });

  test('nested object array', () => {
    const obj = {
      a: {
        b: {
          c: ['d', 'e', 0, 3, 'adferd'],
        },
      },
    };

    const same = {
      a: {
        b: {
          c: ['d', 'e', 0, 3, 'adferd'],
        },
      },
    };

    expect(equals(obj, same)).toBe(true);
  });

  test('nested objects with completely different looking property names', () => {
    const obj = {
      a: {
        b: 1,
        c: {
          d: 2,
        },
      },
    };

    const different = {
      z: {
        w: {
          u: 1,
          v: 2,
        },
      },
      y: {
        x: 1,
      },
    };
    expect(equals(obj, different)).toBe(false);
  });

  test("object property orders don't matter", () => {
    const obj = {
      a: 1,
      b: 2,
    };

    const same = {
      b: 2,
      a: 1,
    };

    expect(equals(obj, same)).toBe(true);
  });

  test('array order does matter', () => {
    const arr = [0, 1];
    const same = [1, 0];

    expect(equals(arr, same)).toBe(false);
  });

  test('test equality for 0, false and undefined values', () => {
    const arr = [0, false, undefined];
    const same = [0, false, undefined];

    expect(equals(arr, same)).toBe(true);
  });

  test('test non equality for 0, false and undefined values', () => {
    const arr = [0, false, undefined];
    const same = [false, undefined, 0];

    expect(equals(arr, same)).toBe(false);
  });

  test('test equality for NaN values', () => {
    const arr = [NaN, 0];
    const same = [NaN, 0];

    expect(equals(arr, same)).toBe(true);
  });

  test('test non equality for NaN values', () => {
    const arr = [NaN, 0];
    const same = [false, 0];

    expect(equals(arr, same)).toBe(false);
  });

  test('test equality for null values', () => {
    const arr = [null, false];
    const same = [null, false];

    expect(equals(arr, same)).toBe(true);
  });

  test('test non equality for null values', () => {
    const arr = [null, false];
    const same = [false, null];

    expect(equals(arr, same)).toBe(false);
  });

  test('test equality for regexp values', () => {
    const regex = /someregexp/gi;
    const same = /someregexp/gi;

    expect(equals(regex, same)).toBe(true);
  });

  // test('test non equality for regexp values', () => {
  //   const regex = /someregexp/gi;
  //   const different = /someotherregexp/gi;
  //
  //   expect(equals(regex, different)).toBe(false);
  // });
});
