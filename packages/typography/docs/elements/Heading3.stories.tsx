import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Typography from '../../src';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Heading3',
  component: Typography.Heading3,
  decorators: [withTypography],
};

export const Example = ({
  variant,
  color,
}: Typography.Heading3Props): JSX.Element => {
  return (
    <div>
      <Typography.Heading3 variant={variant} color={color}>
        Handsome bulletin
      </Typography.Heading3>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Typography.Heading3 variant={variant} color={color}>
              Handsome bulletin
            </Typography.Heading3>
          )}
        </code>
      </div>
    </div>
  );
};
