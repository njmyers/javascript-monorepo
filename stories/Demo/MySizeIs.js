import React from 'react';
import Size from '../../src';

const MySizeIs = ({ sizes } = {}) => {
    return (
        <React.Fragment>
            <h2>Child Component</h2>
            <p>My width is: {sizes.component.width}</p>
            <p>My height is: {sizes.component.height}</p>
        </React.Fragment>
    );
};

export default Size({ component: true })(MySizeIs);
