import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Elements from '../../src/elements';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Span',
  component: Elements.Span,
  decorators: [withTypography],
};

export const Example = ({ variant, color }) => {
  return (
    <div>
      <Elements.Span variant={variant} color={color}>
        Handsome bulletin
      </Elements.Span>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Elements.Span variant={variant} color={color}>
              Handsome bulletin
            </Elements.Span>
          )}
        </code>
      </div>
    </div>
  );
};
