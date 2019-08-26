import removeLeadingSlash from '../remove-leading-slash';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof removeLeadingSlash()).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(removeLeadingSlash()).toMatchSnapshot();
  });
});
