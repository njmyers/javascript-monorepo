import React from 'react';
import Size from '../../src';

const Child = ({ sizes } = {}) => {
    const element = document.getElementById('child-header');
    console.log(element ? element.getBoundingClientRect() : null);
    console.log(element ? element.clientTop : null);

    return (
        <React.Fragment>
            <h2 id="child-header">Child Component</h2>
            <li>Am I inView: {JSON.stringify(sizes)}</li>
        </React.Fragment>
    );
};

export default Size({ inView: true })(Child);
