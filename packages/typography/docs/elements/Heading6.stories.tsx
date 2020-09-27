import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Elements from '../../src/elements';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Heading6',
  component: Elements.Heading6,
  decorators: [withTypography],
};

export const Example = ({ variant, color }) => {
  return (
    <div>
      <Elements.Heading6 variant={variant} color={color}>
        Handsome bulletin
      </Elements.Heading6>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Elements.Heading6 variant={variant} color={color}>
              Handsome bulletin
            </Elements.Heading6>
          )}
        </code>
      </div>
    </div>
  );
};
