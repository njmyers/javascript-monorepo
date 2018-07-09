# Component Library

This is a collection of useful and maybe useless React components. In general components will follow a few rules in order to increase usability. These rules in paricular are applied in how the components will use inline styles

## Global Usage notes

### Inline Styling

1.  All components accept className prop.
2.  For a shallow merge of styles, use the style prop on a component.
3.  To escape all inline styles, pass an empty object to replaceStyle prop.
4.  For a custom reusable component, redefine the defaultProps with a new replaceStyle object. Don't forget to merge all of the other defaultProps!

```js
<Component className="class" />
// behaves as expected - inline styles take precendence over rules applied to className
<Component style={{ color: 'red' }} />
// shallowly merges style with the default inline styles of the component
<Component replaceStyle={{}} />
// all inline styles are removed
```

### Animation Props
