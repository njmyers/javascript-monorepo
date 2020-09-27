import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Typography from '../../src';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Heading6',
  component: Typography.Heading6,
  decorators: [withTypography],
};

export const Example = ({
  variant,
  color,
}: Typography.Heading6Props): JSX.Element => {
  return (
    <div>
      <Typography.Heading6 variant={variant} color={color}>
        Handsome bulletin
      </Typography.Heading6>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Typography.Heading6 variant={variant} color={color}>
              Handsome bulletin
            </Typography.Heading6>
          )}
        </code>
      </div>
    </div>
  );
};
