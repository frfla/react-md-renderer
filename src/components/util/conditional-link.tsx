import type { ComponentType } from 'react';
import { styled } from '@stitches/react';

const FallbackLink = styled('a', {});
let LINK: ComponentType<any>;

try {
  const { Link } = require('next/navigation');
  LINK = Link;
} catch (e) {
  try {
    const { Link } = require('@remix-run/react');
    LINK = Link;
  } catch (e) {
    try {
      const { Link } = require('react-router-dom');
      LINK = Link;
    } catch (e) {
      try {
        const { Link } = require('react-router');
        LINK = Link;
      } catch (e) {
        LINK = FallbackLink;
      }
    }
  }
}

export default LINK;
