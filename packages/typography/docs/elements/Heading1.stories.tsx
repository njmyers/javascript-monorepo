import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Typography from '../../src';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Heading1',
  component: Typography.Heading1,
  decorators: [withTypography],
};

export const Example = ({
  variant,
  color,
}: Typography.Heading1Props): JSX.Element => {
  return (
    <div>
      <Typography.Heading1 variant={variant} color={color}>
        Handsome bulletin
      </Typography.Heading1>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Typography.Heading1 variant={variant} color={color}>
              Handsome bulletin
            </Typography.Heading1>
          )}
        </code>
      </div>
    </div>
  );
};
