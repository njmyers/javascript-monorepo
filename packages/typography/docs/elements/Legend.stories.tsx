import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Typography from '../../src';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Legend',
  component: Typography.Legend,
  decorators: [withTypography],
};

export const Example = ({
  variant,
  color,
}: Typography.LegendProps): JSX.Element => {
  return (
    <div>
      <Typography.Legend variant={variant} color={color}>
        Handsome bulletin
      </Typography.Legend>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Typography.Legend variant={variant} color={color}>
              Handsome bulletin
            </Typography.Legend>
          )}
        </code>
      </div>
    </div>
  );
};
