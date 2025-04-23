import { styled } from '@stitches/react';
import { HTMLAttributes } from 'react';
import { ExtraProps } from 'react-markdown';

interface MDExtraProps extends ExtraProps {
  css?: any;
}

type Props = HTMLAttributes<HTMLImageElement> & MDExtraProps;

export function Image({ css, ...props }: Props) {
  return <Comp css={css} {...props}></Comp>;
}

const Comp = styled('img', {
  display: 'block'
});
