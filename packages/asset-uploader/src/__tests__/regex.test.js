import { isLocalURL, queryString } from '../regex';

const port = 3001;
const localURL = `http://localhost:${port}/?uri=https%3A%2F%2Fd3a1sednyhk71e.cloudfront.net%2F2018%2F03%2Fdime01.jpg&amp;resize%5Bw%5D=1200&amp;format=webp&mode=development`;

describe('test the regexes for finding urls in the index.html document', () => {
  test('tests a string for a url', () => {
    expect(isLocalURL(localURL)).toBe(true);
  });

  test('finds the query string match', () => {
    expect(queryString(localURL)).toBe(
      'uri=https%3A%2F%2Fd3a1sednyhk71e.cloudfront.net%2F2018%2F03%2Fdime01.jpg&amp;resize%5Bw%5D=1200&amp;format=webp&mode=development'
    );
  });
});
