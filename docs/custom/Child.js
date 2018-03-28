import React from 'react';
import Size from '../../src';

const Child = ({ sizes } = {}) => {
    return (
        <React.Fragment>
            <h2>Child Component</h2>
            <li>My custom flag isBiggerThan1000 is: {sizes.isBiggerThan1000.toString()}</li>
            <li>My custom flag isBiggerThan1200 is: {sizes.isBiggerThan1200.toString()}</li>
        </React.Fragment>
    );
};

const isBiggerThan1000 = (sizes) => (sizes.window ? sizes.window.innerWidth > 1000 : undefined);
const isBiggerThan1200 = (sizes) => (sizes.window ? sizes.window.innerWidth > 1200 : undefined);

const custom = [
    {
        name: 'isBiggerThan1000',
        fn: isBiggerThan1000,
    },
    {
        name: 'isBiggerThan1200',
        fn: isBiggerThan1200,
    },
];

export default Size({ measureWindow: true, custom })(Child);
