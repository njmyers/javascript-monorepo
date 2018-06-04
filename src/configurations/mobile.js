const createMobile = (breakpoint = 768) => ({
    name: 'mobile',
    schema: false,
    fn: (sizes) => sizes.window.innerWidth < breakpoint,
    subscriptions: {
        resize: true,
    },
});

export default createMobile;
