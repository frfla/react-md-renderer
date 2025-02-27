'use client';
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

export const Hn = forwardRef(
  ({ depth = 'h1', ...props }: Props, ref: Ref<HTMLParagraphElement>) => {
    const b_HasRendered = useRef<boolean>(false);
    const [Component, setComponent] = useState<(typeof Comp)[typeof depth]>(Comp[depth]);

    let CLASSNAME = props.className;

    /** renders h1 only once for title */
    useEffect(() => {
      if (depth !== 'h1' || !Comp[depth] || !b_HasRendered.current) return;

      const nextHeadingLevel =
        `h${Number(depth.slice(-1)) <= 6 ? Number(depth.slice(-1)) + 1 : 6}` as keyof typeof Comp;
      setComponent(Comp[nextHeadingLevel] ?? <span />);
      let prefix = props.className!.slice(0, -2);
      CLASSNAME = `${prefix}title`;
    }, [depth]);

    return <Component ref={ref} className={CLASSNAME} {...props} />;
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
