import { RendererCSSMap } from './types';

export function setTheme(css?: Partial<RendererCSSMap>): RendererCSSMap {
  const result: RendererCSSMap = {
    h1: '',
    h2: '',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
    p: '',
    a: '',
    blockquote: '',
    checkbox: '',
    code: '',
    pre: '',
    hr: '',
    img: '',
    ul: '',
    ol: '',
    li: '',
    table: '',
    typography: {
      strike: '',
      strong: '',
      italic: ''
    }
  };
  return { ...result, ...css };
}
