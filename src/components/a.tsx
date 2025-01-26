import LINK from './util/conditional-link';
import { useIsomorphicLayoutEffect } from '#/use-isomorphic-layout-effect';
import { useState } from 'react';
import { isClient } from '#/device';
import { styled } from '@stitches/react';

export function Anchor({ ...props }) {
  const [basePath, setBasePath] = useState<string>(process.env.MD_RENDERER_ROOT_URL ?? '');

  useIsomorphicLayoutEffect(() => {
    if (!basePath && isClient()) setBasePath(window.location.origin);
  }, []);

  const absoluteURL = new URL(props.href, basePath);
  const relativePath = `${absoluteURL.pathname}${absoluteURL.search}${absoluteURL.hash}`;
  const IS_INTERNAL = absoluteURL.origin === basePath;

  if (IS_INTERNAL)
    return (
      <WRAPPER {...props.className}>
        <LINK to={relativePath} {...props} />
      </WRAPPER>
    );
  return <A href={props.href} target="_blank" rel={props.rel ?? `noreferrer noopener`} {...props} />;
}

const A = styled('a', {});
const WRAPPER = styled('div', {});
