'use client';
import type { HTMLAttributes, Ref } from 'react';
import { useEffect, forwardRef } from 'react';
import { ExtraProps } from 'react-markdown';
import { warning } from '../../_lib/warn';

const getThemePath = (theme: string | undefined) => {
  try {
    return require.resolve(`highlight.js/styles/${theme || 'github'}.css`);
  } catch (e) {
    return require.resolve('highlight.js/styles/github.css');
  }
};

interface MDExtraProps extends ExtraProps {
  inline?: boolean;
  type?: string;
  theme?: string;
}
type Props = HTMLAttributes<HTMLElement> & MDExtraProps;

export const Code = forwardRef<HTMLElement | HTMLPreElement, Props>(
  ({ inline = false, theme, ...props }: Props, ref) => {
    useEffect(() => {
      import(getThemePath(theme)).catch(err =>
        warning(`failed to load code theme - ${theme}`, err)
      );
    }, [theme]);

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
