'use client';

import { useState, useEffect } from 'react';
import Loading from './Loading';
import { useSmoothScroll, useAnimations } from '../utils/interactions';

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Use custom hooks for interactions
  useSmoothScroll();
  useAnimations();

  useEffect(() => {
    // Only show loading on initial load, not on route changes
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Show loading only on initial load
  if (isInitialLoad) {
    return <Loading />;
  }

  return <>{children}</>;
}
