// @flow
import * as React from 'react';
import FormElement from './FormElement';

const Submit = React.forwardRef((props, ref) => (
  <FormElement as="input" forwardedRef={ref} {...props} />
));

Submit.defaultProps = {
  name: 'submit',
  type: 'submit',
  value: 'submit',
  block: 'formInput',
  required: false,
  placeholder: '',
};

export default Submit;
