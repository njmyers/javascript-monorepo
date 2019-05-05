// @flow
import * as React from 'react';
import FormElement from './FormElement';

const TextArea = React.forwardRef((props, ref) => (
  <FormElement as="textarea" forwardedRef={ref} {...props} />
));

TextArea.defaultProps = {
  name: 'text',
  element: 'textArea',
  required: false,
  block: 'formTextArea',
  placeholder: '',
};

export default TextArea;
