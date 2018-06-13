// @flow
import * as React from 'react';
import BEM from '../BEM';

/** Pass in Options Objects */
type Option = {
  name: string,
  value: string | number,
};

type Props = {
  options: Array<Option>,
  name: string,
  label?: string,
  block: string,
  required: boolean,
  modifiers?: string | Array<string>,
  value?: string | number,
  onChange: Function,
};

class Select extends React.PureComponent<Props> {
  static defaultProps = {
    name: 'select',
    required: false,
    block: 'formSelect',
  };

  // label defaults to property name
  label = this.props.label ? this.props.label : this.props.name;

  render() {
    return (
      <BEM block={this.props.block}>
        <div modifiers={this.props.modifiers}>
          <label
            element="label"
            modifiers={this.props.modifiers}
            htmlFor={this.props.name}
          >
            {this.label}
          </label>
          <select
            element="select"
            modifiers={this.props.modifiers}
            value={this.props.value}
            name={this.props.name}
            onChange={this.props.onChange}
            required={this.props.required}
          >
            {this.props.options.map((option) => (
              <option
                element="option"
                modifiers={this.props.modifiers}
                key={option.value}
                name={this.props.name}
                value={option.value}
              >
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </BEM>
    );
  }
}

export default Select;
