import { styled } from '@stitches/react';

export function Strike({ ...props }) {
  return <I {...props} />;
}

const I = styled('span', {});
