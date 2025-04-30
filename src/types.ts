import { OBJECT_CSS } from '../stitches.config';
export interface RendererCSSSet {
  h1: OBJECT_CSS | string | (() => Object);
  h2: OBJECT_CSS | string | (() => Object);
  h3: OBJECT_CSS | string | (() => Object);
  h4: OBJECT_CSS | string | (() => Object);
  h5: OBJECT_CSS | string | (() => Object);
  h6: OBJECT_CSS | string | (() => Object);
  p: OBJECT_CSS | string | (() => Object);
  a: OBJECT_CSS | string | (() => Object);
  blockquote: OBJECT_CSS | string | (() => Object);
  checkbox: OBJECT_CSS | string | (() => Object);
  pre: OBJECT_CSS | string | (() => Object);
  code: OBJECT_CSS | string | (() => Object);
  hr: OBJECT_CSS | string | (() => Object);
  img: OBJECT_CSS | string | (() => Object);
  ul: OBJECT_CSS | string | (() => Object);
  ol: OBJECT_CSS | string | (() => Object);
  li: OBJECT_CSS | string | (() => Object);
  table: OBJECT_CSS | string | (() => Object);
  typography: {
    strike?: OBJECT_CSS | string | (() => Object);
    strong?: OBJECT_CSS | string | (() => Object);
    italic?: OBJECT_CSS | string | (() => Object);
  };
}
