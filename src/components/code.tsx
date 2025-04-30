import { styled } from '@stitches/react';
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { ExtraProps } from 'react-markdown';

interface MDExtraProps extends ExtraProps {
  inline?: boolean;
  type?: string;
  theme?: any;
  css?: any;
  inlineCss?: any;
  inlineClassName?: string;
}
type Props = HTMLAttributes<HTMLElement> & MDExtraProps;

export const Code = forwardRef<HTMLElement, Props>(({ css, ...props }: Props, ref) => {
  return (
    <StyledCode ref={ref} css={css} className={props.className} {...props}>
      {props.children}
    </StyledCode>
  );
});

const StyledCode = styled('code', {});
