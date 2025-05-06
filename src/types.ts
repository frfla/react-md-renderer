import type { CSS } from '@stitches/react';

export type CSS_TYPE = CSS<{}>;
export interface RendererCSSMap {
  h1: CSS_TYPE | string | (() => Object);
  h2: CSS_TYPE | string | (() => Object);
  h3: CSS_TYPE | string | (() => Object);
  h4: CSS_TYPE | string | (() => Object);
  h5: CSS_TYPE | string | (() => Object);
  h6: CSS_TYPE | string | (() => Object);
  p: CSS_TYPE | string | (() => Object);
  a: CSS_TYPE | string | (() => Object);
  blockquote: CSS_TYPE | string | (() => Object);
  checkbox: CSS_TYPE | string | (() => Object);
  pre: CSS_TYPE | string | (() => Object);
  code: CSS_TYPE | string | (() => Object);
  hr: CSS_TYPE | string | (() => Object);
  img: CSS_TYPE | string | (() => Object);
  ul: CSS_TYPE | string | (() => Object);
  ol: CSS_TYPE | string | (() => Object);
  li: CSS_TYPE | string | (() => Object);
  table: CSS_TYPE | string | (() => Object);
  typography: {
    strike?: CSS_TYPE | string | (() => Object);
    strong?: CSS_TYPE | string | (() => Object);
    italic?: CSS_TYPE | string | (() => Object);
  };
}
