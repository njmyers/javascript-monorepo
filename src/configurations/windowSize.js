const windowSize = {
    name: 'window',
    schema: {
        innerHeight: 0,
        innerWidth: 0,
        outerHeight: 0,
        outerWidth: 0,
    },
    fn: (sizes, node) => ({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth,
    }),
    subscriptions: { resize: true },
};

export default windowSize;
