import printConfiguration from '../print-configuration';

describe('program/printConfiguration', () => {
  test('it is a function ', () => {
    expect(typeof printConfiguration).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(() => printConfiguration({})).not.toThrow();
  });
});
