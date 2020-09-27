import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Typography from '../../src';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Caption',
  component: Typography.Caption,
  decorators: [withTypography],
};

export const Example = ({
  variant,
  color,
}: Typography.CaptionProps): JSX.Element => {
  return (
    <div>
      <Typography.Caption variant={variant} color={color}>
        Handsome bulletin
      </Typography.Caption>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Typography.Caption variant={variant} color={color}>
              Handsome bulletin
            </Typography.Caption>
          )}
        </code>
      </div>
    </div>
  );
};
