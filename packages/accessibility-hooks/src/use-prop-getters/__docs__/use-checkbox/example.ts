import * as React from 'react';
import useCheckbox from '../../use-checkbox';

function CheckboxExample() {
  const onChange = (checked, e) => {
    console.log(checked, e);
  };

  const { getCheckboxProps, getLabelProps, checked } = useCheckbox({
    name: 'checkbox-example',
    onChange,
  });

  return (
    <section>
      <h4 className="sans">Checkbox Example</h4>
      <label {...getLabelProps()}>Checkbox</label>
      <span {...getCheckboxProps()}>[{checked ? 'x' : ' '}]</span>
      <p className="sans">I am {checked ? 'checked' : 'unchecked'}</p>
    </section>
  );
}

export default CheckboxExample;
