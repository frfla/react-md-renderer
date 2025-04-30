# Markdown Renderer With React

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

- 마크다운 텍스트를 주입합니다.

### `CSS`

```
{
  [markup]: string|CSS
}
```

- markups: `a`, `blockquote`, `checkbox`, `code`, `pre`, `h1-h6`, `hr`, `img`, `li`, `ol`, `ul`, `p`, `table`, `strike`, `strong`, `italic`
- 해당하는 마크업을 KEY로 CSS를 주입합니다. string도 가능하며(이 경우 className으로 작동합니다), object type으로 스타일을 직접 주입할 수도 있습니다. 기본적으로 CSS 라이브러리에 종속적이지 않습니다.
- e.g. `...CSS={{h1: {color:'blue'}, h2: 'className', p: CSS_VAR}}...`

### `classNamePrefix`: string

CSS를 주입하지 않고 외부에서 정의하는 경우 prefix를 붙일 수 있습니다. (e.g. module css) 이때 `prefix-h1`, `prefix-h2`의 형태로 className이 부여되고 없는 경우 `md-renderer-h1`처럼 각 태그에 className이 자동으로 부여됩니다. CSS prop이 주입되는 경우에는 prefix가 무시됩니다.
