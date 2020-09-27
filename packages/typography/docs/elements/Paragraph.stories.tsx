import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Elements from '../../src/elements';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Paragraph',
  component: Elements.Paragraph,
  decorators: [withTypography],
};

export const Example = ({ variant, color }) => {
  return (
    <div>
      <Elements.Paragraph variant={variant} color={color}>
        Handsome bulletin
      </Elements.Paragraph>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Elements.Paragraph variant={variant} color={color}>
              Handsome bulletin
            </Elements.Paragraph>
          )}
        </code>
      </div>
    </div>
  );
};
