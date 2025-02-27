//@ts-nocheck
//type과 함께 파일 작성 후 반드시 지울 것

import { RendererCSSSet } from './types';

//TODO: CSS Libarary Agnostic할 것
//1. styled-components
//2. emotion
//3. v-ex
//4. stitches
//5. pure css
export function themeSet(css?: Partial<RendererCSSSet>): RendererCSSSet {
  const result: RendererCSSSet = {
    h1: undefined,
    h2: undefined,
    h3: undefined,
    h4: undefined,
    h5: undefined,
    h6: undefined,
    p: undefined,
    a: undefined,
    blockquote: undefined,
    checkbox: undefined,
    code: '',
    hr: undefined,
    img: undefined,
    ul: undefined,
    ol: undefined,
    table: undefined,
    typography: {
      strike: undefined,
      strong: undefined,
      italic: undefined
    }
  };
  return { ...result, ...css };
}
