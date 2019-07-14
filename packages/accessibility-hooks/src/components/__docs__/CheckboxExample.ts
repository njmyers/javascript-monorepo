import * as React from 'react';
import Checkbox from '../Checkbox';

function CheckboxExample() {
  const handleChange = (checked, e) => {
    console.log(checked, e);
  };

  return (
    <Checkbox onChange={handleChange}>
      {({ getCheckboxProps, getLabelProps, checked }) => (
        <React.Fragment>
          <label {...getLabelProps()}>
            Checkbox Example <input {...getCheckboxProps()} />
          </label>
          <p>I am {checked ? 'checked' : 'unchecked'}</p>
        </React.Fragment>
      )}
    </Checkbox>
  );
}

export default CheckboxExample;
