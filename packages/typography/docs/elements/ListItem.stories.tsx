import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Elements from '../../src/elements';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/ListItem',
  component: Elements.ListItem,
  decorators: [withTypography],
};

export const Example = ({ variant, color }) => {
  return (
    <div>
      <Elements.ListItem variant={variant} color={color}>
        Handsome bulletin
      </Elements.ListItem>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Elements.ListItem variant={variant} color={color}>
              Handsome bulletin
            </Elements.ListItem>
          )}
        </code>
      </div>
    </div>
  );
};
