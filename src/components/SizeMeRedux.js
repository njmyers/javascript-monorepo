import React from 'react';
import sizeMe from 'react-sizeme';

const config = {
	monitorWidth: true,
	monitorHeight: true,
};

const mapStateToProps = (state, ownProps) => {
	return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		updateContentSize: (height, key) => dispatch(updateContentSize(height, key)),
	};
};

function SizeMeRedux(Wrapped) {
	(props) => {
		this.props.updateContentSize(this.props.size, this.props.sizeKey);
		return <Wrapped search={search} {...props} />;
	};

	return withRouter(Search);
}

export default sizeMe(config)(connect(mapStateToProps, mapDispatchToProps)(SizeMeRedux));
