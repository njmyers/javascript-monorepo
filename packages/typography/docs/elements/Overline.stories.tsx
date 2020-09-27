import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Typography from '../../src';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Overline',
  component: Typography.Overline,
  decorators: [withTypography],
};

export const Example = ({
  variant,
  color,
}: Typography.OverlineProps): JSX.Element => {
  return (
    <div>
      <Typography.Overline variant={variant} color={color}>
        Handsome bulletin
      </Typography.Overline>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Typography.Overline variant={variant} color={color}>
              Handsome bulletin
            </Typography.Overline>
          )}
        </code>
      </div>
    </div>
  );
};
