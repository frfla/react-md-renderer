import { createStitches } from '@stitches/react';
import type { CSS } from '@stitches/react/types/css-util';

export const { styled, css, globalCss, config } = createStitches();
export type CSS_TYPE = CSS<typeof config>;
