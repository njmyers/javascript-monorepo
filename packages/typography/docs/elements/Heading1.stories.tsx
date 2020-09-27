import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Elements from '../../src/elements';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Heading1',
  component: Elements.Heading1,
  decorators: [withTypography],
};

export const Example = ({ variant, color }) => {
  return (
    <div>
      <Elements.Heading1 variant={variant} color={color}>
        Handsome bulletin
      </Elements.Heading1>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Elements.Heading1 variant={variant} color={color}>
              Handsome bulletin
            </Elements.Heading1>
          )}
        </code>
      </div>
    </div>
  );
};
