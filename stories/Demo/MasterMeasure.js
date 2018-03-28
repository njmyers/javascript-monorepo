import React from 'react';
import ReactMarkdown from 'react-markdown';
import Size from '../../src';

const MasterMeasure = ({ sizes } = {}) => {
    return (
        <React.Fragment>
            <h2>Child Component</h2>
            <p>My width is: {sizes.component.width}</p>
            <p>My height is: {sizes.component.height}</p>
            <p>Am I mobile: {sizes.mobile !== undefined ? sizes.mobile.toString() : null}</p>
            <p>My breakpoint is: {sizes.breakpoint}</p>
            <p>My height is: {sizes.component.height}</p>
            <p>My orientation is: {sizes.orientation}</p>
        </React.Fragment>
    );
};

export default Size({ windowSize: true, orientation: true, mobile: true, component: true })(
    MasterMeasure
);
