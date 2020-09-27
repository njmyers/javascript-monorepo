import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as Typography from '../../src';
import { withTypography } from '../decorators/with-typography';

export default {
  title: 'typography/FigCaption',
  component: Typography.FigCaption,
  decorators: [withTypography],
};

export const Example = ({
  variant,
  color,
}: Typography.FigCaptionProps): JSX.Element => {
  return (
    <div>
      <Typography.FigCaption variant={variant} color={color}>
        Handsome bulletin
      </Typography.FigCaption>
      <div style={{ margin: '0.5rem 0' }}>
        <code>
          {ReactDOMServer.renderToStaticMarkup(
            <Typography.FigCaption variant={variant} color={color}>
              Handsome bulletin
            </Typography.FigCaption>
          )}
        </code>
      </div>
    </div>
  );
};
