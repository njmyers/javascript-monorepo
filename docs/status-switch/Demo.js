import * as React from 'react';
import StatusSwitch from '../../src/StatusSwitch';

class Demo extends React.Component {
  state = {
    status: 'initial',
  };

  buttonStyle = {
    border: 'none',
    display: 'block',
    borderRadius: '8px',
    padding: '8px 16px',
    marginBottom: '10px',
    cursor: 'pointer',
  };

  loading = () => this.setState({ status: 'loading' });
  resolved = () => this.setState({ status: 'resolved' });
  error = () => this.setState({ status: 'error' });

  onClick = (event) => {
    this.loading();
    setTimeout(this.resolved, 4000);
  };

  render() {
    return (
      <React.Fragment>
        <StatusSwitch status={this.state.status}>
          <p>This content is inside the switch</p>
        </StatusSwitch>
        <p>This content is outside the switch</p>
        <button style={this.buttonStyle} onClick={this.onClick}>
          Loading
        </button>
        <button style={this.buttonStyle} onClick={this.error}>
          Error
        </button>
        <button style={this.buttonStyle} onClick={this.resolved}>
          Resolved
        </button>
      </React.Fragment>
    );
  }
}

export default Demo;
