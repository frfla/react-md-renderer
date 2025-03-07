# Markdown Renderer With React

## Quick Start

```
 <Renderer
      markdown={`# React\n## Markdown Renderer\n**Bold Text** Plain Text`}
      CSS={{
        h2: {
          fontFamily: 'serif',
        },
      }}
  />
```

## API

### `markdown`

- Markdown Text

### `CSS`

```
{
  [markup]: string|CSS
}
```

- markups: `a`, `blockquote`, `checkbox`, `code`, `h1-h6`, `hr`, `img`, `li`, `ol`, `ul`, `p`, `table`
- CSS is injected into the corresponding markup using a KEY. It can be provided as a string, similar to a className, or you can directly inject styles using an object. By default, it is not dependent on any CSS library.
- e.g. `...CSS={{h1: {color:'blue'}, h2: 'className', p: CSS_VAR}}...`

### `classNamePrefix`: string

When CSS is defined externally without injection (e.g. module CSS), you can apply a prefix. In this case, classNames are assigned in the format `prefix-h1`, `prefix-h2`; if no prefix is provided, each tag automatically receives a className such as `md-renderer-h1`. **When the CSS prop is injected, the prefix is ignored.**

### basepath for `a` tag

The site’s root address(e.g. http://localhost:3000) must be set as an environment variable named MD_RENDERER_BASEPATH.
