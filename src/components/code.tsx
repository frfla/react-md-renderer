'use client';
import type { HTMLAttributes, Ref } from 'react';
import { forwardRef } from 'react';
import { ExtraProps } from 'react-markdown';

interface MDExtraProps extends ExtraProps {
  inline?: boolean;
  type?: string;
  theme?: string;
}
type Props = HTMLAttributes<HTMLElement> & MDExtraProps;

export const Code = forwardRef<HTMLElement | HTMLPreElement, Props>(
  ({ inline = false, theme, ...props }: Props, ref) => {
    if (inline) {
      return (
        <code ref={ref} className={props.className} {...props}>
          {props.children}
        </code>
      );
    } else
      return (
        <pre ref={ref as Ref<HTMLPreElement>} className={props.className} {...props}>
          {props.children}
        </pre>
      );
  }
);
