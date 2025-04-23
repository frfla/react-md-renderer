import { styled } from '@stitches/react';
import type { HTMLAttributes, Ref } from 'react';
import { forwardRef } from 'react';
import { ExtraProps } from 'react-markdown';

interface MDExtraProps extends ExtraProps {
  type?: string;
  css?: any;
}

type Props = HTMLAttributes<HTMLParagraphElement> & MDExtraProps;

export const P = forwardRef(
  ({ children, ...props }: Props, ref: Ref<HTMLParagraphElement>) => {
    return (
      <Comp ref={ref} {...props}>
        {children}
      </Comp>
    );
  }
);

const Comp = styled('p', {});
