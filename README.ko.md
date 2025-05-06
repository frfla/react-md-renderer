# @frfla/react-md-renderer

**CSS로 간단하게 커스텀하는 마크다운 렌더러**

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

- 마크다운 텍스트를 주입합니다.

## CSS

```
CSS?: {
  [markup]: string|CSS
}
```

- `a`, `blockquote`, `checkbox`, `code`, `pre`, `h1-h6`, `hr`, `img`, `li`, `ol`, `ul`, `p`, `table`, `strike`, `strong`, `italic`
- 위에 해당하는 마크업을 KEY로 CSS를 주입할 수 있습니다.
  - **string 타입을 제공하는 경우 className으로 작동합니다.**
- 기본적으로 CSS 라이브러리에 종속적이지 않습니다.

```
...
  CSS={
    { h1: { color : 'blue', fontWeight: '700' },
      h2: 'className',
      p: CSS_VAR }
  }
...
```

## classNamePrefix

```
classNamePrefix?: string
```

- CSS를 prop으로 주입하지 않고 외부에서 정의하는 경우 컨벤션을 위해 prefix를 제공합니다.
- 이때 `prefix-h1`, `prefix-h2`의 형태로 className이 부여됩니다.
- 값이 없는 경우 `md-renderer-h1`, `md-renderer-p`처럼 각 마크업 이름으로 className이 부여됩니다.
- CSS prop이 주입되는 경우에는 prefix가 무시됩니다.

## adjustHeadings

```
classNamePrefix?: boolean
```

`true`일 경우 `hn`의 경우 문서 하나에 `h1`태그가 문서의 가장 큰 제목으로서 단 하나만 존재하도록 보정됩니다.

- 기본값: `false`
- `h1`이 여러 개 존재하는 경우 처음 `h1`을 제외한 제목들을 모두 `h(n+1)`로 변경합니다(`h6` 제외).
- 이때 변경된 마크업의 `h1` 스타일링은 유지됩니다.
  - 즉 대제목처럼 사용한 스타일링은 유지하되, 문서의 마크업만 변경해 문서의 구조를 최적화합니다.
