import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postsRequest } from '../../utils/wp/wp-actions';
import { TIMESTAMP, REFRESH } from '../../utils/dates';
import StatusSwitch from '../StatusSwitch';

import { fillFrom } from 'smalldash';

const createRecursiveAPI = (Wrapped) => (type) => {
  const Switched = StatusSwitch(Wrapped);

  class RecursiveAPI extends Component {
    componentWillMount() {
      if (
        this.props.status !== 'resolved' ||
        TIMESTAMP - this.props.loadedAt > REFRESH
      )
        this.props.postsRequest({ page: 1 });
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.totalPages !== nextProps.totalPages) {
        const pages = fillFrom(1, nextProps.totalPages);
        pages.map((page) => {
          const found = nextProps.fetchedPages.includes(page);
          if (!found) this.props.postsRequest({ page });
        });
      }
    }

    render() {
      return <Switched {...this.props} type={type} />;
    }
  }

  const mapStateToProps = (state) => ({
    status: state[type].status,
    loadedAt: state[type].loadedAt,
    data: state[type].data,
    fetchedPages: state[type].fetchedPages,
    totalPages: state[type].totalPages,
  });

  const mapDispatchToProps = (dispatch) => ({
    postsRequest: (query) => dispatch(postsRequest(type)(query)),
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(RecursiveAPI);
};

export default createRecursiveAPI;
