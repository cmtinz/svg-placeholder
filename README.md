# svg-placeholder

Function svgPlaceholder() returns the SVG code for a placeholder.

## Examples

### Basic Usage

```js
svgPlaceholder()
/* 
<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='250' height='250' style='background-color: white'>
<rect width=125 height=125 x=62.5 y=62.5 fill=gray />
</svg>
*/
```

### Custom usage

```js
svgPlaceholder({shape: 'circle', fg: 'red'})
/* 
<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='250' height='250' style='background-color: white'>
<circle cx=125 cy=125 fill=red r=62.5 />
</svg>
*/
```

## Supported attributes

- shape: rectangle (default) | circle | text
- embeded: if true escapes the XML declaration.
- width: default 250
- height: default 250
- bg: default white
- fg: default gray

