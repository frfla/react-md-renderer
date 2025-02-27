export interface RendererCSSSet {
  h1: Object | string | (() => Object);
  h2: Object | string | (() => Object);
  h3: Object | string | (() => Object);
  h4: Object | string | (() => Object);
  h5: Object | string | (() => Object);
  h6: Object | string | (() => Object);
  p: Object | string | (() => Object);
  a: Object | string | (() => Object);
  blockquote: Object | string | (() => Object);
  checkbox: Object | string | (() => Object);
  code: Object | string | (() => Object);
  hr: Object | string | (() => Object);
  img: Object | string | (() => Object);
  ul: Object | string | (() => Object);
  ol: Object | string | (() => Object);
  li: Object | string | (() => Object);
  table: Object | string | (() => Object);
  typography: {
    strike?: Object | string | (() => Object);
    strong?: Object | string | (() => Object);
    italic?: Object | string | (() => Object);
  };
}
