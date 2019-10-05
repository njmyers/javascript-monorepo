import findDirectoryUpwards from '../find-directory-upwards';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof findDirectoryUpwards).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(findDirectoryUpwards()).toMatchSnapshot();
  });
});
