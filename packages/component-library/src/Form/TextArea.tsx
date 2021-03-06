// @ts-nocheck

import * as React from 'react';
import Element from './Element';

const TextArea = React.forwardRef((props, ref) => (
  <Element as="textarea" forwardedRef={ref} {...props} />
));

TextArea.defaultProps = {
  name: 'text',
  element: 'textArea',
  required: false,
  block: 'formTextArea',
  placeholder: '',
};

export default TextArea;
