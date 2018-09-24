// @flow
import * as React from 'react';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';
// types
import type { Location, RouterHistory } from 'react-router-dom';

type RouterProps = {
  /** react router location */
  location: Location,
  /** react router history */
  history: RouterHistory,
};

type SearchProps = {
  /** object that contains all of the search parameters from the url */
  search: {} | null,
};

type CombinedProps = SearchProps & RouterProps;

type State = {
  /** object that contains all of the search parameters from the url */
  search: {} | null,
  unlistenHistory: (() => any) | null,
};

/**
 * Adds a prop search to the component containing current search strings
 * @param {component} Wrapped react component to wrap with this HOC
 */
function withSearch<Props: {}>(
  Wrapped: React.ComponentType<Props>
): React.ComponentType<$Diff<Props, CombinedProps>> {
  class Search extends React.PureComponent<RouterProps, State> {
    state = {
      search: null,
      unlistenHistory: null,
    };

    unlistenHistory = null;

    handleHistoryChange = (location: Location) => {
      this.setState((state) => ({
        search: queryString.parse(location.search),
      }));
    };

    componentDidMount() {
      this.handleHistoryChange(this.props.location);
      // set up listener
      this.setState((state) => ({
        unlistenHistory: this.props.history.listen(this.handleHistoryChange),
      }));
    }

    componentWillUnmount() {
      if (this.state.unlistenHistory) this.state.unlistenHistory();
    }

    render() {
      return <Wrapped search={this.state.search} {...this.props} />;
    }
  }

  return withRouter(Search);
}

export default withSearch;
