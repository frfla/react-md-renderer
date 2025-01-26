import { useEffect, useLayoutEffect } from 'react';
import { isClient } from './device';

export const useIsomorphicLayoutEffect = isClient() ? useLayoutEffect : useEffect;
