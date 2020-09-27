import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Elements from '../../src/elements';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Heading5',
  component: Elements.Heading5,
  decorators: [withTypography],
};

export const Example = ({ variant, color }) => {
  return (
    <div>
      <Elements.Heading5 variant={variant} color={color}>
        Handsome bulletin
      </Elements.Heading5>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Elements.Heading5 variant={variant} color={color}>
              Handsome bulletin
            </Elements.Heading5>
          )}
        </code>
      </div>
    </div>
  );
};
