import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Elements from '../../src/elements';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Caption',
  component: Elements.Caption,
  decorators: [withTypography],
};

export const Example = ({ variant, color }) => {
  return (
    <div>
      <Elements.Caption variant={variant} color={color}>
        Handsome bulletin
      </Elements.Caption>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Elements.Caption variant={variant} color={color}>
              Handsome bulletin
            </Elements.Caption>
          )}
        </code>
      </div>
    </div>
  );
};
