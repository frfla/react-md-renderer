import { styled } from '@stitches/react';
import { ComponentPropsWithoutRef } from 'react';

export function Checkbox({ ...props }: ComponentPropsWithoutRef<'input'>) {
  return <C type="checkbox" {...props} />;
}

const C = styled('input', {});
