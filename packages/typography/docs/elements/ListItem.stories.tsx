import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Typography from '../../src';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/ListItem',
  component: Typography.ListItem,
  decorators: [withTypography],
};

export const Example = ({
  variant,
  color,
}: Typography.ListItemProps): JSX.Element => {
  return (
    <div>
      <Typography.ListItem variant={variant} color={color}>
        Handsome bulletin
      </Typography.ListItem>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Typography.ListItem variant={variant} color={color}>
              Handsome bulletin
            </Typography.ListItem>
          )}
        </code>
      </div>
    </div>
  );
};
