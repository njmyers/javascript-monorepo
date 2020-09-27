import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Typography from '../../src';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Label',
  component: Typography.Label,
  decorators: [withTypography],
};

export const Example = ({
  variant,
  color,
}: Typography.LabelProps): JSX.Element => {
  return (
    <div>
      <Typography.Label variant={variant} color={color}>
        Handsome bulletin
      </Typography.Label>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Typography.Label variant={variant} color={color}>
              Handsome bulletin
            </Typography.Label>
          )}
        </code>
      </div>
    </div>
  );
};
