const orientation = {
    name: 'orientation',
    schema: 'landscape',
    fn: (sizes) => (sizes.window.innerWidth > sizes.window.innerHeight ? 'landscape' : 'portrait'),
    subscriptions: { resize: true },
};

export default orientation;
