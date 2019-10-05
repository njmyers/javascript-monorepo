import * as React from 'react';
import Loading from '../Loading';

type Props = {
  loading: React.ComponentType<{}>;
  error: React.ComponentType<{}>;
  status: string | Array<string>;
  children: React.Node;
};

class StatusSwitch extends React.Component<Props> {
  static defaultProps = {
    error: () => 'error',
    loading: Loading,
    status: 'initial',
    children: null,
  };

  cascadeStatus = (status: string | Array<string>) => {
    if (!Array.isArray(status)) return status;
    else if (status.includes('error')) return 'error';
    else if (status.includes('loading')) return 'loading';
    else if (status.includes('resolved')) return 'resolved';
  };

  render() {
    switch (this.cascadeStatus(this.props.status)) {
      case 'initial':
      case 'loading':
      default:
        const Loading: React.ComponentType<{}> = this.props.loading;
        return <Loading />;
      case 'error':
        const Error: React.ComponentType<{}> = this.props.error;
        return <Error />;
      case 'resolved':
        return React.Children.only(this.props.children);
    }
  }
}

export default StatusSwitch;
