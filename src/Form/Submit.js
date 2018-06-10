// @flow
import * as React from 'react';
import BEM from '../BEM';

type Props = {
  name: string,
  type: string,
  value: string,
  block: string,
  modifiers?: string | Array<string> | void,
};

class Submit extends React.PureComponent<Props> {
  static defaultProps = {
    name: 'submit',
    type: 'submit',
    value: 'submit',
    block: 'formInput',
  };

  render() {
    return (
      <BEM block={this.props.block}>
        <div modifiers={this.props.modifiers}>
          <input
            element="input"
            modifiers={this.props.modifiers}
            type={this.props.type}
            value={this.props.value}
          />
        </div>
      </BEM>
    );
  }
}

export default Submit;
