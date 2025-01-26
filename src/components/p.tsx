import { styled } from '@stitches/react';
import type { HTMLAttributes, Ref } from 'react';
import { forwardRef } from 'react';
import { ExtraProps } from 'react-markdown';

interface MDExtraProps extends ExtraProps {
  type?: string;
  theme?: string;
}

type Props = HTMLAttributes<HTMLParagraphElement> & MDExtraProps;

export const P = forwardRef(({ children, theme, ...props }: Props, ref: Ref<HTMLParagraphElement>) => {
  return (
    <Comp ref={ref} {...props}>
      {children}
    </Comp>
  );
});

const Comp = styled('p', {});
