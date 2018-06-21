// @flow
import * as React from 'react';
import BEM from '../BEM';

type Props = {
  name: string,
  label?: string,
  required: boolean,
  block: string,
  modifiers?: string | Array<string> | void,
  className: string,
  focus: boolean,
  onChange?: Function,
  placeholder?: string,
  value?: string | number,
  rows?: number,
  cols?: number,
};

class TextArea extends React.PureComponent<Props> {
  static defaultProps = {
    name: 'text',
    required: false,
    block: 'formTextArea',
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
            modifiers={this.props.modifiers}
            htmlFor={this.props.name}
          >
            {this.label}
          </label>
          <textarea
            ref={(node) => (this.input = node)}
            element="textArea"
            modifiers={this.props.modifiers}
            value={this.props.value}
            name={this.props.name}
            onChange={this.props.onChange}
            required={this.props.required}
            placeholder={this.props.placeholder}
            rows={this.props.rows}
            cols={this.props.cols}
          />
        </div>
      </BEM>
    );
  }
}

export default TextArea;
