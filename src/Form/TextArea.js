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
  className: string,
  classModifier?: string | Array<string> | void,
  focus: boolean,
  onChange?: Function,
  placeholder?: string,
  value: string | number,
};

class TextArea extends React.PureComponent<Props> {
  static defaultProps = {
    type: 'text',
    name: 'text',
    required: false,
    block: 'formInput',
    focus: false,
    placeholder: '',
  };

  // ref to this input
  input: ?HTMLTextAreaElement;
  // label defaults to property name
  label = this.props.label ? this.props.label : this.props.name;

  componentDidMount() {
    // $FlowFixMe
    if (this.props.focus) this.input.focus();
  }

  render() {
    return (
      <BEM block={this.props.block}>
        <div modifiers={this.props.modifiers}>
          <label
            element="label"
            htmlFor={this.props.name}
            modifiers={this.props.modifiers}
          >
            {this.label}
          </label>
          <textarea
            ref={(node) => (this.input = node)}
            element="textArea"
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

export default TextArea;
