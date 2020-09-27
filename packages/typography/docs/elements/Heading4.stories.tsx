import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Elements from '../../src/elements';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Heading4',
  component: Elements.Heading4,
  decorators: [withTypography],
};

export const Example = ({ variant, color }) => {
  return (
    <div>
      <Elements.Heading4 variant={variant} color={color}>
        Handsome bulletin
      </Elements.Heading4>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Elements.Heading4 variant={variant} color={color}>
              Handsome bulletin
            </Elements.Heading4>
          )}
        </code>
      </div>
    </div>
  );
};
