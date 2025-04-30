import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const { styled, css, globalCss, config } = createStitches();
export type OBJECT_CSS = Stitches.CSS<typeof config>;
