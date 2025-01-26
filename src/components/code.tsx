'use client';
import { useForceRender } from '#/use-force-render';
import type { HTMLAttributes, Ref } from 'react';
import { useEffect, forwardRef } from 'react';
import { ExtraProps } from 'react-markdown';

interface MDExtraProps extends ExtraProps {
  inline?: boolean;
  type?: string;
  theme?: string;
}
type Props = HTMLAttributes<HTMLElement> & MDExtraProps;

export const Code = forwardRef<HTMLElement | HTMLPreElement>(({ inline = false, theme, ...props }: Props, ref) => {
  const forceReRender = useForceRender();

  useEffect(() => {
    (async function () {
      await import(`highlight.js/styles/${theme || 'github'}.css`).catch(err => {
        console.warn(
          `<md-renderer> failed to load code theme - ${theme}`,
          '\n',
          'To change Theme, See highlight.js',
          err
        );
      });
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
});
