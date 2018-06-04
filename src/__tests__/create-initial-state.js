import { createInitialState, validateConfigurations } from '../initializers';

const baseConfiguration = [
    {
        name: 'component',
        schema: {
            height: null,
            width: null,
        },
        fn: () => null,
    },
    {
        name: 'windowSize',
        schema: {
            innerHeight: null,
            innerWidth: null,
        },
        fn: () => null,
    },
];

test('it correctly reduces schema configuration', () => {
    const configuration = [...baseConfiguration];

    const expected = {
        DOMNode: null,
        windowSize: {
            innerHeight: null,
            innerWidth: null,
        },
        component: {
            height: null,
            width: null,
        },
    };

    const initialState = createInitialState(configuration);
    expect(initialState).toEqual(expected);
});

test('it correctly reduces without schema configuration', () => {
    const configuration = [
        ...baseConfiguration,
        {
            name: 'flag',
            fn: () => null,
        },
    ];

    const expected = {
        DOMNode: null,
        windowSize: {
            innerHeight: null,
            innerWidth: null,
        },
        component: {
            height: null,
            width: null,
        },
        flag: null,
    };

    const initialState = createInitialState(validateConfigurations(configuration));
    expect(initialState).toEqual(expected);
});
