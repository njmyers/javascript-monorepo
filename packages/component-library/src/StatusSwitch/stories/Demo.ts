import * as React from 'react';
import StatusSwitch from '../StatusSwitch';

class ErrorComponent extends React.Component {
  componentDidMount() {
    console.log('Error Component mounted');
  }

  render() {
    return <div>Error</div>;
  }
}

class Loading extends React.Component {
  componentDidMount() {
    console.log('Loading Component mounted');
  }

  render() {
    return <div>Loading</div>;
  }
}

class Interior extends React.Component {
  componentDidMount() {
    console.log('Interior Component mounted');
  }

  render() {
    return <div>Interior</div>;
  }
}

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

  componentDidMount() {
    this.onClick();
  }

  render() {
    return (
      <React.Fragment>
        <StatusSwitch
          status={this.state.status}
          error={ErrorComponent}
          loading={Loading}
        >
          <Interior />
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
