import * as React from 'react';
import reactStoryFile from '../react-story-file';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof reactStoryFile).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(reactStoryFile()).toMatchSnapshot();
  });
});


