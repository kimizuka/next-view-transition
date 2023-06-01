'use client';

import { useContext, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { HistoryContext } from '@/contexts/HistoryContext';
 
export function NavigationEvents() {
  const { setNewPathName } = useContext(HistoryContext);
  const pathname = usePathname();

  useEffect(() => {
    setNewPathName(pathname);
  }, [pathname]);

  return null;
}