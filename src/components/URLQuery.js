import React from 'react';
import { withRouter } from 'react-router-dom';
import { parse } from 'qs';

function URLQuery(Wrapped) {
	function Search(props) {
		const search = parse(props.history.location.search, { ignoreQueryPrefix: true });
		return <Wrapped search={search} {...props} />;
	}

	return withRouter(Search);
}

export default URLQuery;
