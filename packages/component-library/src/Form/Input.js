// @flow
import * as React from 'react';
import FormElement from './FormElement';

const Input = React.forwardRef((props, ref) => (
  <FormElement as="input" forwardedRef={ref} {...props} />
));

Input.defaultProps = {
  type: 'text',
  name: 'input',
  required: false,
  block: 'formInput',
  placeholder: '',
};

export default Input;
