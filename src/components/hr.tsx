import { styled } from '@stitches/react';
import type { HTMLAttributes, Ref } from 'react';
import { forwardRef } from 'react';
import { ExtraProps } from 'react-markdown';

interface MDExtraProps extends ExtraProps {
  type?: string;
  theme?: string;
  css?: any;
}

type Props = HTMLAttributes<HTMLHRElement> & MDExtraProps;

export const Hr = forwardRef(
  ({ children, theme, ...props }: Props, ref: Ref<HTMLHRElement>) => {
    return (
      <Comp ref={ref} {...props}>
        {children}
      </Comp>
    );
  }
);

const Comp = styled('hr', {});
