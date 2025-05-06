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

# API/Props

## markdown

```
markdown: string
```

- Markdown Text (Plain Text)

## CSS

```
CSS: {
  [markup]: string|CSS
}
```

- `a`, `blockquote`, `checkbox`, `code`, `pre`, `h1-h6`, `hr`, `img`, `li`, `ol`, `ul`, `p`, `table`, `strike`, `strong`, `italic`
- CSS is injected into the corresponding markup using a KEY.
  - It can be provided as a string. **In this case, it works identically with className.**
- By default, it is not dependent on any CSS library.

```
...
  CSS={
    { h1: { color : 'blue', fontWeight: '700'  },
      h2: 'className',
      p: CSS_VAR }
  }
...
```

## classNamePrefix

```
classNamePrefix?: string
```

- When CSS is defined externally without injection (e.g. module CSS), you can apply a prefix.
- In this case, classNames are assigned in the format `prefix-h1`, `prefix-h2`;
- If no prefix is provided, each tag automatically receives a className such as `md-renderer-h1`.
- **When the CSS prop is injected, the prefix is ignored.**

## adjustHeadings

```
classNamePrefix?: string
```

If `true`, in a document, the `h1` tag should exist as the single main heading. Here’s how to adjust it:

- default: `false`
- If there are multiple `h1` tags, change the additional ones to `h2`. Subsequent headings should be adjusted accordingly (`h3` to `h6`).
- The styling applied to the original `h1` should be retained. This means keeping the styling that makes it appear as a primary heading while optimizing the document’s structure by adjusting the markup.
