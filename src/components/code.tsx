'use client';
import { useForceRender } from '../../_lib/use-force-render';
import type { HTMLAttributes, Ref } from 'react';
import { useEffect, forwardRef } from 'react';
import { ExtraProps } from 'react-markdown';
import { warning } from '../../_lib/warn';

interface MDExtraProps extends ExtraProps {
  inline?: boolean;
  type?: string;
  theme?: string;
}
type Props = HTMLAttributes<HTMLElement> & MDExtraProps;

export const Code = forwardRef<HTMLElement | HTMLPreElement, Props>(
  ({ inline = false, theme, ...props }: Props, ref) => {
    const forceReRender = useForceRender();

    useEffect(() => {
      (async function () {
        await import(`highlight.js/styles/${theme || 'github'}.css`).catch(err =>
          warning(
            `failed to load code theme - ${theme}. To change Theme, See highlight.js`,
            err
          )
        );
      })();

      forceReRender();
    }, []);

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
