import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Elements from '../../src/elements';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Legend',
  component: Elements.Legend,
  decorators: [withTypography],
};

export const Example = ({ variant, color }) => {
  return (
    <div>
      <Elements.Legend variant={variant} color={color}>
        Handsome bulletin
      </Elements.Legend>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Elements.Legend variant={variant} color={color}>
              Handsome bulletin
            </Elements.Legend>
          )}
        </code>
      </div>
    </div>
  );
};
