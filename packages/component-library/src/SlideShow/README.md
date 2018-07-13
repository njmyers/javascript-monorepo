### SlideShow

This component creates a slideshow from react children. It uses the default animation props associated with this library as a reminder these are

```js
{
  style: // shallow merge,
  replaceStyle: // replaces inline styles,
  onState: // the on state of the slide,
  offState: // the off state,
  transitionSpeed: // the speed of the animation
  transitionTiming: // css transition timing function
}
```

This component also accepts to following props associated with slideshow functions

```js
{
  autoplay: boolean,
  buttons: boolean,
}
```

<!-- STORY -->

## Props
| Prop Name | Type | Required | Default Value | Description |
|:----------|:-----|:---------|:--------------|:------------|
|`buttons`|`boolean`|true|<code>true</code>|_boolean to show or hide buttons_|
|`children`|`ReactNode`|false|-|__|
|`className`|`string`|false|-|_className applied to the container element_|
|`frameRate`|`number`|true|<code>3000</code>|_frame rate in milliseconds_|
|`offState`|<code>{}</code>|true|<code>{<br>  opacity: 0,<br>}</code>|_css inline styles applied to the off state_|
|`onState`|<code>{}</code>|true|<code>{<br>  opacity: 1,<br>}</code>|_css inline styles applied to the on state_|
|`play`|`boolean`|true|<code>true</code>|_boolean to determine whether the slideshow starts on mount_|
|`replaceStyle`|<code>{}</code>|true|<code>{<br>  position: 'absolute',<br>  top: 0,<br>  left: 0,<br>}</code>|_completely replace all styles_|
|`style`|<code>{}</code>|false|-|_shallowly merge styles_|
|`transitionSpeed`|`number`|true|<code>0.25</code>|_the speed of the transition_|
|`transitionTiming`|<code>&#124; 'ease'<br>&#124; 'linear'<br>&#124; 'ease-in'<br>&#124; 'ease-out'<br>&#124; 'ease-in-out'<br>&#124; 'step-start'<br>&#124; 'step-end'</code>|true|<code>'ease'</code>|_the transition timing function_|