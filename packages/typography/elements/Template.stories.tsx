import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Elements from '../../src/elements';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/ComponentName',
  component: Elements.ComponentName,
  decorators: [withTypography],
};

export const Example = ({ variant, color }) => {
  return (
    <div>
      <Elements.ComponentName variant={variant} color={color}>
        Handsome bulletin
      </Elements.ComponentName>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Elements.ComponentName variant={variant} color={color}>
              Handsome bulletin
            </Elements.ComponentName>
          )}
        </code>
      </div>
    </div>
  );
};
