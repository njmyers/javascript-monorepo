import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Elements from '../../src/elements';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Label',
  component: Elements.Label,
  decorators: [withTypography],
};

export const Example = ({ variant, color }) => {
  return (
    <div>
      <Elements.Label variant={variant} color={color}>
        Handsome bulletin
      </Elements.Label>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Elements.Label variant={variant} color={color}>
              Handsome bulletin
            </Elements.Label>
          )}
        </code>
      </div>
    </div>
  );
};
