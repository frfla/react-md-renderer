# @frfla/react-md-renderer

**Markdown Renderer With CSS-Only Customs**

```
npm install @frfla/react-md-renderer
yarn add @frfla/react-md-renderer
pnpm add @frfla/react-md-renderer
```

## Quick Start

```
 <Renderer
      markdown={`# React\n## Markdown Renderer\n**Bold Text** Plain Text`}
      CSS={{
        h2: {
          fontFamily: 'serif',
        },
        pre: {...},
        img: {...},
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

- markups: `a`, `blockquote`, `checkbox`, `code`, `pre`, `h1-h6`, `hr`, `img`, `li`, `ol`, `ul`, `p`, `table`, `strike`, `strong`, `italic`
- CSS is injected into the corresponding markup using a KEY. It can be provided as a string, similar to a className, or you can directly inject styles using an object. By default, it is not dependent on any CSS library.
- e.g. `...CSS={{h1: {color:'blue'}, h2: 'className', p: CSS_VAR}}...`
- `hn`s will adjusted

### `classNamePrefix`: string

When CSS is defined externally without injection (e.g. module CSS), you can apply a prefix. In this case, classNames are assigned in the format `prefix-h1`, `prefix-h2`; if no prefix is provided, each tag automatically receives a className such as `md-renderer-h1`. **When the CSS prop is injected, the prefix is ignored.**
