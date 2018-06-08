import React from 'react';

const Select = ({
    options,
    name = 'select',
    label = name,
    required = false,
    className = 'formSelect',
    modifier,
    value,
    onChange,
}) => (
    <div className={`${className} ${modifier ? modifier : ''}`}>
        <label className={`${className}_label`} htmlFor={name}>
            {label}
        </label>
        <select
            className={`${className}_select`}
            value={value}
            name={name}
            onChange={onChange}
            required={required}
        >
            {options.map((option) => (
                <option
                    key={option.value}
                    name={name}
                    value={option.value}
                    className={`${className}_option`}
                >
                    {option.name}
                </option>
            ))}
        </select>
    </div>
);

export default Select;
