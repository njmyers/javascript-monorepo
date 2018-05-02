import createAdvancedPropInjector from './createAdvancedPropInjector';

const schema = {
    innerHeight: 0,
    innerWidth: 0,
    outerHeight: 0,
    outerWidth: 0,
};

const measureWindow = (sizes, node) => ({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
});

export default createAdvancedPropInjector({
    subscriptions: { resize: true },
    name: 'window',
    fn: measureWindow,
    schema,
});
