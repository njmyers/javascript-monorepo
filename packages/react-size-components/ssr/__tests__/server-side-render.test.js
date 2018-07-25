/**
 * @jest-environment node
 */

// Removes jest provided window global
// https://jestjs.io/docs/en/configuration.html#testenvironment-string

import * as React from 'react';
import { renderToString } from 'react-dom/server';
import Page from '../Page';

/** Should throw an error for accesing window before componentDidMount */
class WillThrow extends React.Component {
  render() {
    return (
      <article>
        <h1>Window Height</h1>
        <p>{window.innerHeight}</p>;
      </article>
    );
  }
}

describe('SSR functionality for size components', () => {
  test('sanity check, should throw error', () => {
    // accessing window in node
    expect(() => window).toThrowErrorMatchingSnapshot();
    // accessing window in lifecycle
    expect(() => renderToString(<WillThrow />)).toThrowErrorMatchingSnapshot();
  });

  test('it renders to string without errors', () => {
    // accessing window in proper lifecycle
    expect(renderToString(<Page />)).toMatchSnapshot();
  });
});
