// @flow
import * as React from 'react';

type Props = {
  type: string,
  name: string,
  label?: string,
  required: boolean,
  className: string,
  classModifier?: string | Array<string> | void,
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
    className: 'formInput',
    classModifier: '',
    focus: false,
    placeholder: '',
  };

  // ref to this input
  input: ?HTMLInputElement;
  // label defaults to property name
  label = this.props.label ? this.props.label : this.props.name;
  // coerce classModifiers to array or void
  classModifier: Array<string> | void = Array.isArray(this.props.classModifier)
    ? [...this.props.classModifier]
    : this.props.classModifier
      ? [this.props.classModifier]
      : undefined;

  componentDidMount() {
    // $FlowFixMe
    if (this.props.focus) this.input.focus();
  }

  getModifierClassName = (element: string) => {
    return this.classModifier
      ? this.classModifier
          .map((modifier) => `${this.getElementName(element)}-${modifier}`)
          .reduce((a, b) => `${a} ${b}`, '')
      : '';
  };

  getElementName = (element: string) => {
    return element
      ? `${this.props.className}_${element}`
      : this.props.className;
  };

  calculateClassName = (element: string = '') => {
    return this.props.classModifier
      ? `${this.getElementName(element)}${this.getModifierClassName(element)}`
      : this.getElementName(element);
  };

  render() {
    return (
      <div className={this.calculateClassName()}>
        <label
          className={this.calculateClassName('label')}
          htmlFor={this.props.name}
        >
          {this.label}
        </label>
        <input
          ref={(node) => (this.input = node)}
          className={this.calculateClassName('input')}
          type={this.props.type}
          value={this.props.value}
          name={this.props.name}
          onChange={this.props.onChange}
          required={this.props.required}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default Input;
