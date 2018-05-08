import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postsRequest } from '../../utils/wp/wp-actions';
import { TIMESTAMP, REFRESH } from '../../utils/dates';
import StatusSwitch from '../StatusSwitch';

import { fillFrom } from 'smalldash';

const createRecursiveAPI = (Wrapped) => (inputTypes) => {
	// ensure array
	const types = !Array.isArray(inputTypes) ? [inputTypes] : [...inputTypes];
	const Switched = StatusSwitch(Wrapped);

	class RecursiveAPI extends Component {
		componentWillMount() {
			types.forEach((type) => {
				if (
					this.props[type].status !== 'resolved' ||
					TIMESTAMP - this.props[type].loadedAt > REFRESH
				)
					this.props[type].postsRequest({ page: 1 });
			});
		}

		componentWillReceiveProps(nextProps) {
			types.forEach((type) => {
				if (this.props[type].totalPages !== nextProps[type].totalPages) {
					const pages = fillFrom(1, nextProps[type].totalPages);
					pages.forEach((page) => {
						const found = nextProps[type].fetchedPages.includes(page);
						if (!found) this.props[type].postsRequest({ page });
					});
				}
			});
		}

		render() {
			return <Switched {...this.props} types={types} />;
		}
	}

	const mapStateToProps = (state) =>
		types.reduce(
			(obj, type) => ({
				...obj,
				[type]: {
					status: state[type].status,
					loadedAt: state[type].loadedAt,
					data: state[type].data,
					fetchedPages: state[type].fetchedPages,
					totalPages: state[type].totalPages,
				},
			}),
			{}
		);

	const mapDispatchToProps = (dispatch) =>
		types.reduce(
			(obj, type) => ({
				...obj,
				[type]: {
					postsRequest: (query) => dispatch(postsRequest(type)(query)),
				},
			}),
			{}
		);

	const mergeProps = (stateProps, dispatchProps, ownProps) => ({
		...ownProps,
		...types.reduce(
			(obj, type) => ({
				...obj,
				[type]: {
					...stateProps[type],
					...dispatchProps[type],
				},
			}),
			{}
		),
		status: types.map((type) => stateProps[type].status),
	});

	return connect(mapStateToProps, mapDispatchToProps, mergeProps)(RecursiveAPI);
};

export default createRecursiveAPI;
