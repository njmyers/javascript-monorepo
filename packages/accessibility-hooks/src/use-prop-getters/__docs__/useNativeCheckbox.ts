import * as React from 'react';
import useNativeCheckbox from '../use-native-checkbox';

function NativeCheckboxExample() {
  const onChange = (checked, e) => {
    console.log(checked, e);
  };

  const { getCheckboxProps, getLabelProps, checked } = useNativeCheckbox({
    name: 'checkbox-example',
    onChange,
  });

  return (
    <section>
      <h4 className="sans">Native Checkbox Example</h4>
      <label {...getLabelProps()}>Native Checkbox</label>
      <input {...getCheckboxProps()} />
      <p className="sans">I am {checked ? 'checked' : 'unchecked'}</p>
    </section>
  );
}

export default NativeCheckboxExample;
