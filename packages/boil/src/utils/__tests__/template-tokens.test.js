import templateTokens from '../template-tokens';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof templateTokens()).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(templateTokens()).toMatchSnapshot();
  });
});
