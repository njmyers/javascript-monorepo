import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Elements from '../../src/elements';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/FigCaption',
  component: Elements.FigCaption,
  decorators: [withTypography],
};

export const Example = ({ variant, color }) => {
  return (
    <div>
      <Elements.FigCaption variant={variant} color={color}>
        Handsome bulletin
      </Elements.FigCaption>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Elements.FigCaption variant={variant} color={color}>
              Handsome bulletin
            </Elements.FigCaption>
          )}
        </code>
      </div>
    </div>
  );
};
