import { styled } from '@stitches/react';
import { HTMLAttributes } from 'react';
import { ExtraProps } from 'react-markdown';

interface MDExtraProps extends ExtraProps {
  css?: any;
}

type Props = HTMLAttributes<HTMLOListElement> & MDExtraProps;

export function OL({ css, ...props }: Props) {
  return <Comp css={css} {...props}></Comp>;
}

const Comp = styled('ol', {});
