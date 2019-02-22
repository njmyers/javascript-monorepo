/** @flow */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Scratch } from '@njmyers/component-library';

import './style.sass';

const StyleClassDemo = ({ typography }) => (
  <section>
    <h1 className={typography}>Heading 1</h1>
    <h2 className={typography}>Heading 2</h2>
    <h3 className={typography}>Heading 3</h3>
    <h4 className={typography}>Heading 4</h4>
    <h5 className={typography}>Heading 5</h5>
    <h6 className={typography}>Heading 6</h6>
    <hr />
    <p className={`${typography}-1`}>Some paragraph of text</p>
    <ul>
      <li className={typography}>First Item</li>
      <li className={typography}>Second Item</li>
      <li className={typography}>Third Item</li>
      <li className={typography}>Fourth Item</li>
      <li className={typography}>Fifth Item</li>
      <li className={typography}>Sixth Item</li>
    </ul>
    <ul>
      <li className={typography}>First Item</li>
      <li className={typography}>Second Item</li>
      <li className={typography}>Third Item</li>
      <li className={typography}>Fourth Item</li>
      <li className={typography}>Fifth Item</li>
      <li className={typography}>Sixth Item</li>
    </ul>
    <caption className={typography}>Caption Text</caption>
    <button />

    <h4 className={typography}>Inheritance</h4>
    <section className={typography}>
      <h6>This is a direct child</h6>
      <section>
        <h6>This is not a direct child</h6>
      </section>
    </section>

    <section>
      <p>Unstyled</p>
      <p className="body-sans-1">Styled</p>
    </section>

    <span className="overline-sans">Overline</span>
    <caption className="sans">Caption</caption>
  </section>
);

storiesOf('@njmyers-sass', module).add('Material Playground', () => (
  <React.Fragment>
    <StyleClassDemo typography="sans" />
    {/* <code>
      <StyleClassDemo />
    </code> */}
  </React.Fragment>
));
