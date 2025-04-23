import type { HTMLAttributes, Ref } from 'react';
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

export const Code = forwardRef<HTMLElement | HTMLPreElement, Props>(
  ({ inline = false, ...props }: Props, ref) => {
    if (inline) {
      return (
        <code
          ref={ref}
          css={props.inlineCss}
          className={props.inlineClassName}
          {...props}
        >
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
