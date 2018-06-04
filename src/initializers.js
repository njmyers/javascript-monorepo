import * as __ from 'smalldash';
import invariant from 'invariant';

export const validateConfigurations = (configurations) =>
    configurations.map(({ fn, schema = '', name, subscriptions = null } = {}) => {
        // validate the name
        invariant(
            typeof name === 'string',
            'Please provide a string name for your size configuration'
        );
        // validate the function
        invariant(
            typeof fn === 'function',
            'The fn value of your size configuration is not a function'
        );
        // define defaults
        return { fn, schema, name, subscriptions };
    });

export const createInitialState = (configurations) =>
    configurations.reduce(
        (state, { schema, name, subscriptions } = {}) => ({
            ...state,
            [name]: schema,
            subscriptions: {
                ...state.subscriptions,
                ...subscriptions,
            },
        }),
        {
            DOMNode: null,
        }
    );

export default __.compose(
    createInitialState,
    validateConfigurations
);
