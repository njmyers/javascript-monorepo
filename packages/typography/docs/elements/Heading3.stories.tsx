import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Elements from '../../src/elements';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Heading3',
  component: Elements.Heading3,
  decorators: [withTypography],
};

export const Example = ({ variant, color }) => {
  return (
    <div>
      <Elements.Heading3 variant={variant} color={color}>
        Handsome bulletin
      </Elements.Heading3>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Elements.Heading3 variant={variant} color={color}>
              Handsome bulletin
            </Elements.Heading3>
          )}
        </code>
      </div>
    </div>
  );
};
