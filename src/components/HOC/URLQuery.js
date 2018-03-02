import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { parse } from 'qs';

function URLQuery(Wrapped) {
	class Search extends Component {
		constructor(props) {
			super(props);
			this.handleHistoryChange = this.handleHistoryChange.bind(this);

			const search = parse(this.props.location.search, { ignoreQueryPrefix: true });
			this.state = { search };
		}

		handleHistoryChange(location) {
			const search = parse(location.search, { ignoreQueryPrefix: true });
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
