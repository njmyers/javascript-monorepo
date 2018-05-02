import createAdvancePropInjector from './createAdvancedPropInjector';

const comparator = (sizes, node) => {
    const top = node.getBoundingClientRect().top;
    const height = sizes ? sizes.component.height : 0;
    const innerHeight = sizes.window ? sizes.window.innerHeight : 0;
    return top < 0 ? Math.abs(top) - height < 0 : top < innerHeight;
};

export default createAdvancePropInjector({
    subscriptions: { scroll: true },
    name: 'inView',
    fn: comparator,
});
