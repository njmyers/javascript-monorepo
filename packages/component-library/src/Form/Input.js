// @flow
import * as React from 'react';
import BEM from '../BEM';

type Props = {
  type: string,
  name: string,
  label?: string,
  required: boolean,
  block: string,
  modifiers?: string | Array<string> | void,
  className?: string,
  focus: boolean,
  onChange?: Function,
  placeholder?: string,
  value: string | number,
};

class Input extends React.PureComponent<Props> {
  static defaultProps = {
    type: 'text',
    name: 'input',
    required: false,
    block: 'formInput',
    focus: false,
    placeholder: '',
  };

  // ref to this input
  input: ?HTMLInputElement;
  // label defaults to property name
  label = this.props.label ? this.props.label : this.props.name;

  componentDidMount() {
    // $FlowFixMe
    if (this.props.focus) this.input.focus();
  }

  render() {
    return (
      <BEM block={this.props.block}>
        <div modifiers={this.props.modifiers} className={this.props.className}>
          <label
            element="label"
            htmlFor={this.props.name}
            modifiers={this.props.modifiers}
          >
            {this.label}
          </label>
          <input
            ref={(node) => (this.input = node)}
            element="input"
            modifiers={this.props.modifiers}
            type={this.props.type}
            value={this.props.value}
            name={this.props.name}
            onChange={this.props.onChange}
            required={this.props.required}
            placeholder={this.props.placeholder}
          />
        </div>
      </BEM>
    );
  }
}

export default Input;
