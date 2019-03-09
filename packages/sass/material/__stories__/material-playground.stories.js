/** @flow */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Scratch } from '@njmyers/component-library';

import './style.sass';

storiesOf('@njmyers-sass', module)
  .add('Element Typography Classes', () => (
    <section>
      <h1 className="sans">Heading 1</h1>
      <h2 className="sans">Heading 2</h2>
      <h3 className="sans">Heading 3</h3>
      <h4 className="sans">Heading 4</h4>
      <h5 className="sans">Heading 5</h5>
      <h6 className="sans">Heading 6</h6>
      <h6 className="subtitle-sans">First Subtitle Class</h6>
      <h6 className="subtitle-sans-2">Second Subtitle Class</h6>
      <hr />
      <p className="sans">
        These elements have typography classes styled directly to their element
        names. This is an example of the `sans` class applied directly to a
        paragraph element.
      </p>
      <p className="sans-2">
        This is an example of `sans-2` class applied directly to a paragraph of
        text.
      </p>
      <p className="sans">
        This text has inline elements that <em>denote</em> emphasis or otherwise{' '}
        <strong>demarcate</strong> text.
      </p>
      <h6 className />
      <ul>
        <li className="sans">First Item</li>
        <li className="sans">Second Item</li>
        <li className="sans">Third Item</li>
        <li className="sans">Fourth Item</li>
        <li className="sans">Fifth Item</li>
        <li className="sans">Sixth Item</li>
      </ul>
      <ol>
        <li className="sans">First Item</li>
        <li className="sans">Second Item</li>
        <li className="sans">Third Item</li>
        <li className="sans">Fourth Item</li>
        <li className="sans">Fifth Item</li>
        <li className="sans">Sixth Item</li>
      </ol>
      <caption className="sans">Caption Text</caption>
      <figcaption className="sans">Figcaption Text</figcaption>
      <button className="sans">Button</button>

      <a className="sans">Link</a>
    </section>
  ))
  .add('Element Parent Classes', () => (
    <section className="parent-sans">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <hr />
      <p>Some paragraph of text</p>
      <ul>
        <li>First Item</li>
        <li>Second Item</li>
        <li>Third Item</li>
        <li>Fourth Item</li>
        <li>Fifth Item</li>
        <li>Sixth Item</li>
      </ul>
      <ol>
        <li>First Item</li>
        <li>Second Item</li>
        <li>Third Item</li>
        <li>Fourth Item</li>
        <li>Fifth Item</li>
        <li>Sixth Item</li>
      </ol>
      <caption>Caption Text</caption>
      <figcaption>Figcaption Text</figcaption>
      <button>Button</button>

      <a>Link</a>
    </section>
  ))
  .add('Element Named Classes', () => (
    <section>
      <h1 className="h1-sans">Heading 1</h1>
      <h2 className="h2-sans">Heading 2</h2>
      <h3 className="h3-sans">Heading 3</h3>
      <h4 className="h4-sans">Heading 4</h4>
      <h5 className="h5-sans">Heading 5</h5>
      <h6 className="h6-sans">Heading 6</h6>
      <hr />
      <p className="body-sans">
        Some paragraph of text this uses explicit classnames for example this is
        called `body-sans` or `body-sans-`
      </p>
      <p className="body-sans-1">Some paragraph of text</p>
      <p className="body-sans-2">Some paragraph of text</p>
      <ul>
        <li className="body-sans-1">First Item</li>
        <li className="body-sans-1">Second Item</li>
        <li className="body-sans-1">Third Item</li>
        <li className="body-sans-1">Fourth Item</li>
        <li className="body-sans-1">Fifth Item</li>
        <li className="body-sans-1">Sixth Item</li>
      </ul>
      <ol>
        <li className="body-sans-2">First Item</li>
        <li className="body-sans-2">Second Item</li>
        <li className="body-sans-2">Third Item</li>
        <li className="body-sans-2">Fourth Item</li>
        <li className="body-sans-2">Fifth Item</li>
        <li className="body-sans-2">Sixth Item</li>
      </ol>
      <caption className="caption-sans">Caption Text</caption>
      <button className="button_text-sans">Button</button>
    </section>
  ))
  .add('Scaled Font Class', () => (
    <section>
      <p className="sans">
        This is a default body sans font with initial scale defined at 1
      </p>
      <p className="sans-small">
        This is the same font with an initial scale defined at 0.8
      </p>
      <p className="sans-large">
        This is the same font with an initial scale defined 1.2
      </p>
    </section>
  ));
