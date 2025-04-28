import { styled } from '@stitches/react';
import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type Ref
} from 'react';
import { ExtraProps } from 'react-markdown';

interface MDExtraProps extends ExtraProps {
  depth?: keyof typeof Comp;
  css?: any;
}

type Props = HTMLAttributes<HTMLParagraphElement> & MDExtraProps;

let H1_RENDERED = false;

export const Hn = forwardRef(
  ({ depth = 'h1', ...props }: Props, ref: Ref<HTMLParagraphElement>) => {
    let level = Number(depth.slice(-1));

    if (level === 1) {
      if (H1_RENDERED) level = 2;
      else H1_RENDERED = true;
    }

    if (level >= 2 && level <= 5) level += 1;

    const Tag = Comp[`h${Math.min(level, 6)}` as keyof typeof Comp];
    return <Tag ref={ref} {...props} />;
  }
);

const Comp = {
  h1: styled('h1', {}),
  h2: styled('h2', {}),
  h3: styled('h3', {}),
  h4: styled('h4', {}),
  h5: styled('h5', {}),
  h6: styled('h6', {})
};

Hn.displayName = 'H';
