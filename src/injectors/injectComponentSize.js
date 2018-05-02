import createAdvancedPropInjector from './createAdvancedPropInjector';

const schema = {
    height: 0,
    width: 0,
};

const measureComponent = (sizes, node) => ({
    height: node.clientHeight,
    width: node.clientWidth,
});

export default createAdvancedPropInjector({
    subscriptions: {
        resize: true,
    },
    name: 'component',
    fn: measureComponent,
    schema,
});
