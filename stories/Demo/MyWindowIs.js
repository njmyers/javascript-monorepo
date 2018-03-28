import React from 'react';
import Size from '../../src';

const MyWindowIs = ({ sizes } = {}) => {
    return (
        <React.Fragment>
            <h2>Child Component</h2>
            <p>My window inner width is: {sizes.window.innerWidth}</p>
            <p>My window inner height is: {sizes.window.innerHeight}</p>
            <p>My window outer width is: {sizes.window.outerWidth}</p>
            <p>My window outer height is: {sizes.window.outerHeight}</p>
        </React.Fragment>
    );
};

export default Size({ measureWindow: true, measureComponent: false })(MyWindowIs);
