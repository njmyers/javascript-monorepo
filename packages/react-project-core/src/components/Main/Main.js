import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateContentSize } from '../Root/ui-sizing-actions';

import MainComponent from './MainComponent';

const mapStateToProps = (state, ownProps) => {
    return {
        footerSize: state.UI.footerSize,
        headerSize: state.UI.headerSize,
        isMobile: state.UI.isMobile,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateContentSize: (height) => dispatch(updateContentSize(height, 'contentSize')),
    };
};

const Main = withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));

export default Main;
