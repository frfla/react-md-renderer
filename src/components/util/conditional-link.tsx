import type { ComponentType } from 'react';
import { Link as ReactLink } from 'react-router-dom';

let LINK: ComponentType<any>;
LINK = ReactLink;
try {
  const { Link } = require('next/navigation');
  LINK = Link;
} catch (e) {
  try {
    const { Link } = require('@remix-run/react');
    LINK = Link;
  } catch (e) {
    console.warn('failed to load framework', e);
  }
}

export default LINK;
