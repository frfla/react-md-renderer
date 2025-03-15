'use client';
import LINK from './util/conditional-link';
import { useIsomorphicLayoutEffect } from '../../_lib/use-isomorphic-layout-effect';
import { useState } from 'react';
import { isClient } from '../../_lib/device';
import { styled } from '@stitches/react';

export function Anchor({ ...props }) {
  const [basePath, setBasePath] = useState<string>('');

  useIsomorphicLayoutEffect(() => {
    if (isClient()) setBasePath(window.location.origin);
  }, []);

  const absoluteURL = basePath.length ? new URL(props.href, basePath) : props.href;

  const relativePath =
    `${absoluteURL.pathname}${absoluteURL.search}${absoluteURL.hash}` || props.href;

  const IS_INTERNAL = absoluteURL.origin === basePath;

  if (IS_INTERNAL) return <LINK to={relativePath} href={relativePath} {...props} />;
  return (
    <A
      href={props.href}
      target="_blank"
      rel={props.rel ?? `noreferrer noopener`}
      {...props}
    />
  );
}

const A = styled('a', {});
