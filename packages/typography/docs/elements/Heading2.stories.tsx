import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Elements from '../../src/elements';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Heading2',
  component: Elements.Heading2,
  decorators: [withTypography],
};

export const Example = ({ variant, color }) => {
  return (
    <div>
      <Elements.Heading2 variant={variant} color={color}>
        Handsome bulletin
      </Elements.Heading2>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Elements.Heading2 variant={variant} color={color}>
              Handsome bulletin
            </Elements.Heading2>
          )}
        </code>
      </div>
    </div>
  );
};
