import templateFileFilter from '../template-file-filter';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof templateFileFilter()).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(templateFileFilter()).toMatchSnapshot();
  });
});
