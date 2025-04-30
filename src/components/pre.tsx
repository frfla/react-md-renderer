import { styled } from '@stitches/react';
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { ExtraProps } from 'react-markdown';

interface MDExtraProps extends ExtraProps {
  theme?: any;
  css?: any;
}
type Props = HTMLAttributes<HTMLPreElement> & MDExtraProps;

export const Pre = forwardRef<HTMLPreElement, Props>(({ css, ...props }: Props, ref) => {
  return (
    <StyledPre css={css} ref={ref} className={props.className} {...props}>
      {props.children}
    </StyledPre>
  );
});

const StyledPre = styled('pre', {
  '& > code': {
    fontFamily: 'inherit',
    fontSize: 'inherit'
  }
});
