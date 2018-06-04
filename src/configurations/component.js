const component = {
    name: 'component',
    schema: {
        height: 0,
        width: 0,
    },
    fn: (sizes, node) => ({
        height: node.clientHeight,
        width: node.clientWidth,
    }),
    subscriptions: {
        resize: true,
    },
};

export default component;
