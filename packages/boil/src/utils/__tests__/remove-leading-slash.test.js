import path from 'path';
import removeLeadingSlash from '../remove-leading-slash';

const sep = path.sep;

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof removeLeadingSlash).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(removeLeadingSlash('')).toBe('');
  });

  test('it removes leading slashes', () => {
    expect(removeLeadingSlash(`${sep}some${sep}path`)).toBe(`some${sep}path`);
  });

  test('it removes multiple leading slashes', () => {
    expect(removeLeadingSlash(`${sep}${sep}some${sep}path`)).toBe(
      `some${sep}path`
    );
  });
});
