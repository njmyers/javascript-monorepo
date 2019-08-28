import templateTokens from '../template-tokens';

describe('utils/templateTokens', () => {
  test('it is an array ', () => {
    expect(Array.isArray(templateTokens)).toBe(true);
  });

  templateTokens.forEach(props => {
    test('the object contains a token key', () => {
      expect(props).toHaveProperty('token');
    });

    test('the object contains a fn key', () => {
      expect(props).toHaveProperty('fn');
    });
  });
});
