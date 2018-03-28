import React from 'react';
import Size from '../../src';

const Child = ({ sizes } = {}) => {
    return (
        <React.Fragment>
            <h2>Child Component</h2>
            <li>My window inner width is: {sizes.window.innerWidth}</li>
            <li>My window inner height is: {sizes.window.innerHeight}</li>
            <li>My window outer width is: {sizes.window.outerWidth}</li>
            <li>My window outer height is: {sizes.window.outerHeight}</li>
        </React.Fragment>
    );
};

export default Size({ measureWindow: true, measureComponent: false })(Child);
