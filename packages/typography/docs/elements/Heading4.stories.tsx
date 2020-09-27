import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Typography from '../../src';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Heading4',
  component: Typography.Heading4,
  decorators: [withTypography],
};

export const Example = ({
  variant,
  color,
}: Typography.Heading4Props): JSX.Element => {
  return (
    <div>
      <Typography.Heading4 variant={variant} color={color}>
        Handsome bulletin
      </Typography.Heading4>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Typography.Heading4 variant={variant} color={color}>
              Handsome bulletin
            </Typography.Heading4>
          )}
        </code>
      </div>
    </div>
  );
};
