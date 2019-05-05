// @flow
import * as React from 'react';
import Element from './Element';

const Input = React.forwardRef((props, ref) => (
  <Element as="input" forwardedRef={ref} {...props} />
));

Input.defaultProps = {
  type: 'text',
  name: 'input',
  required: false,
  block: 'formInput',
  placeholder: '',
};

export default Input;
