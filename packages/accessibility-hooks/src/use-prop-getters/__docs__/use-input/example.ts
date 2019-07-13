import * as React from 'react';
import useInput from '../../use-input';

function InputExample() {
  const [controlledValue, setValue] = React.useState('');
  const handleChange = (value, e) => {
    console.log(value, e);
    setValue(value);
  };

  const { value, getInputProps, getLabelProps } = useInput({
    value: controlledValue,
    name: 'example-input',
    onChange: handleChange,
  });

  return (
    <section>
      <h4 className="sans">Native Input</h4>
      <label {...getLabelProps()}>Input</label>
      <input {...getInputProps()} />
      <p className="sans">Value: {value}</p>
    </section>
  );
}

export default InputExample;
