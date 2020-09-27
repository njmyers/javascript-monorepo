import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Typography from '../../src';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/ComponentName',
  component: Typography.ComponentName,
  decorators: [withTypography],
};

export const Example = ({
  variant,
  color,
}: Typography.ComponentNameProps): JSX.Element => {
  return (
    <div>
      <Typography.ComponentName variant={variant} color={color}>
        Handsome bulletin
      </Typography.ComponentName>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Typography.ComponentName variant={variant} color={color}>
              Handsome bulletin
            </Typography.ComponentName>
          )}
        </code>
      </div>
    </div>
  );
};
