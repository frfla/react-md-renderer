import { styled } from '@stitches/react';

export function Strong({ ...props }) {
  return <I {...props} />;
}

const I = styled('span', {});
