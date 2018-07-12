# LazyImage

A component for lazily loading images

## Usage

```js
<LazyImage src={src} placeholder={placeholder} />
```

<!-- STORY -->

## Props
| Prop Name | Type | Required | Default Value | Description |
|:----------|:-----|:---------|:--------------|:------------|
|`alt`|`string`|false|-|_pass-thru alt tag for image_|
|`baseStyles`|<code>{}</code>|true|<code>{<br>  margin: 0,<br>  padding: 0,<br>  width: '100%',<br>  height: 'auto',<br>  backfaceVisibility: 'inherit',<br>}</code>|_base styles applied to all elements_|
|`className`|`string`|true|-|_class name applied to the components in BEM style_|
|`containerStyle`|<code>{}</code>|true|<code>{<br>  position: 'relative',<br>  overflow: 'hidden',<br>  // fix for image element whitespace<br>  lineHeight: 0,<br>}</code>|_shallow merge of styles applied to the container_|
|`imageStyle`|<code>{}</code>|true|<code>{}</code>|_shallow merge of styles applied to the highres_|
|`name`|`string`|false|-|_name attribute for onclick events_|
|`onClick`|`Function`|false|-|_pass-thru onclick function_|
|`placeholder`|`string`|true|-|_placeholder image src_|
|`placeholderStyle`|<code>{}</code>|true|<code>{<br>  position: 'absolute',<br>  top: 0,<br>  left: 0,<br>  bottom: 0,<br>  right: 0,<br>  objectFit: 'contain',<br>  transition: '0.25s opacity',<br>}</code>|_shallow merge of styles applied to the placeholder_|
|`src`|`string`|true|-|_high-res image src_|
|`title`|`string`|false|-|_pass-thru title tag for image_|