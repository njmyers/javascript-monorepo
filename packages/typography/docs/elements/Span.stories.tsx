import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Typography from '../../src';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Span',
  component: Typography.Span,
  decorators: [withTypography],
};

export const Example = ({
  variant,
  color,
}: Typography.SpanProps): JSX.Element => {
  return (
    <div>
      <Typography.Span variant={variant} color={color}>
        Handsome bulletin
      </Typography.Span>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Typography.Span variant={variant} color={color}>
              Handsome bulletin
            </Typography.Span>
          )}
        </code>
      </div>
    </div>
  );
};
