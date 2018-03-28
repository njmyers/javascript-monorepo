import React from 'react';
import Size from '../../src';

const Child = ({ sizes } = {}) => {
    return (
        <React.Fragment>
            <h2>Child Component</h2>
            <li>Am I mobile: {sizes.mobile.toString()}</li>
            <li>My breakpoint is: {sizes.breakpoint}</li>
        </React.Fragment>
    );
};

export const Breakpoint = Size({ mobile: true, breakpoint: 1000 })(Child);
export default Size({ mobile: true })(Child);
