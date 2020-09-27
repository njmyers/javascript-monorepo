import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Typography from '../../src';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/Paragraph',
  component: Typography.Paragraph,
  decorators: [withTypography],
};

export const Example = ({
  variant,
  color,
}: Typography.ParagraphProps): JSX.Element => {
  return (
    <div>
      <Typography.Paragraph variant={variant} color={color}>
        Handsome bulletin
      </Typography.Paragraph>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Typography.Paragraph variant={variant} color={color}>
              Handsome bulletin
            </Typography.Paragraph>
          )}
        </code>
      </div>
    </div>
  );
};
