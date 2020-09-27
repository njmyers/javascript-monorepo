import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Typography from '../../src';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Heading5',
  component: Typography.Heading5,
  decorators: [withTypography],
};

export const Example = ({
  variant,
  color,
}: Typography.Heading5Props): JSX.Element => {
  return (
    <div>
      <Typography.Heading5 variant={variant} color={color}>
        Handsome bulletin
      </Typography.Heading5>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Typography.Heading5 variant={variant} color={color}>
              Handsome bulletin
            </Typography.Heading5>
          )}
        </code>
      </div>
    </div>
  );
};
