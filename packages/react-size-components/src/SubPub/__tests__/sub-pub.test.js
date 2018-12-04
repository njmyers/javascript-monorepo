import SubPub from '../sub-pub';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof SubPub).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(SubPub()).toMatchSnapshot();
  });
});
