import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Typography from '../../src';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Heading2',
  component: Typography.Heading2,
  decorators: [withTypography],
};

export const Example = ({
  variant,
  color,
}: Typography.Heading2Props): JSX.Element => {
  return (
    <div>
      <Typography.Heading2 variant={variant} color={color}>
        Handsome bulletin
      </Typography.Heading2>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Typography.Heading2 variant={variant} color={color}>
              Handsome bulletin
            </Typography.Heading2>
          )}
        </code>
      </div>
    </div>
  );
};
