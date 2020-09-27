import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Elements from '../../src/elements';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Overline',
  component: Elements.Overline,
  decorators: [withTypography],
};

export const Example = ({ variant, color }) => {
  return (
    <div>
      <Elements.Overline variant={variant} color={color}>
        Handsome bulletin
      </Elements.Overline>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Elements.Overline variant={variant} color={color}>
              Handsome bulletin
            </Elements.Overline>
          )}
        </code>
      </div>
    </div>
  );
};
