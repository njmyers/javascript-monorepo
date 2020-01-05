import templateFileFilter from '../template-file-filter';

describe('program/templateFileFilter', () => {
  test('it is a function ', () => {
    expect(typeof templateFileFilter).toBe('function');
    expect(typeof templateFileFilter({})).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(() => templateFileFilter({})()).not.toThrow();
  });
});
