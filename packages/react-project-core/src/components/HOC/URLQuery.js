import React, { Component } from 'react';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';

/**
 * Adds a prop search to the component containing current search strings
 * @param {component} Wrapped react component to wrap with this HOC
 */
function URLQuery(Wrapped) {
    class Search extends Component {
        constructor(props) {
            super(props);
            this.handleHistoryChange = this.handleHistoryChange.bind(this);

            const search = queryString.parse(this.props.location.search);
            this.state = { search };
        }

        handleHistoryChange(location) {
            const search = queryString.parse(location.search);
            this.setState({ search });
        }

        componentDidMount() {
            this.unlistenHistory = this.props.history.listen(this.handleHistoryChange);
        }

        componentWillUnmount() {
            this.unlistenHistory();
        }

        render() {
            return <Wrapped search={this.state.search} {...this.props} />;
        }
    }
    return withRouter(Search);
}

export default URLQuery;
