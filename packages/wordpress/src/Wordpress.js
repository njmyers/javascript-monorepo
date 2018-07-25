// @flow
import * as React from 'react';
import axios from 'axios';
import { StatusSwitch } from 'njmyers-component-library';

const { Consumer, Provider } = React.createContext(null);

type Props = {
  postTypes: string | Array<string>,
  baseURL: string,
  children?: React.Node,
};

export type State = {
  data: {} | null,
  status: 'initial' | 'loading' | 'resolved' | 'error',
  errors: Array<Error>,
};

class ProgramsProvider extends React.Component<Props, State> {
  state = {
    data: null,
    status: 'initial',
    errors: [],
  };

  postTypes = () => {
    return Array.isArray(this.props.postTypes)
      ? [...this.props.postTypes]
      : [this.props.postTypes];
  };

  requestString = (endpoint: string) => {
    return `${this.props.baseURL}/wp-json/wp/v2/${endpoint}`;
  };

  request = (endpoint: string, query: {} = {}) => {
    return new Promise((res, rej) => {
      axios
        .get(this.requestString(endpoint), {
          params: query,
        })
        .then((response) => {
          res(response);
        })
        .catch((error) => {
          rej(error);
        });
    });
  };

  componentDidMount() {
    if (!this.props.baseURL) throw new Error('must supply a baseURL prop');

    const postTypes = this.postTypes();

    Promise.all(postTypes.map((type) => this.request(type)))
      .then((responses) => {
        responses.forEach((response, index) => {
          this.setState((state) => ({
            ...state,
            data: { ...state.data, [postTypes[index]]: response.data },
          }));
        });
      })
      .then(() => {
        this.setState((state) => ({ status: 'resolved' }));
      })
      .catch((error) => {
        this.setState((state) => ({
          status: 'error',
          errors: [...state.errors, error],
        }));
      });
  }

  render() {
    return (
      <StatusSwitch status={this.state.status}>
        <Provider value={this.state}>{this.props.children}</Provider>
      </StatusSwitch>
    );
  }
}

export default ProgramsProvider;

export { Consumer as ProgramsConsumer };
