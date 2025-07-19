'use client';

import UserProfile from '@/modules/profile/components/user-profile';
import { usePageContext } from '@/hooks/use-store-filter/use-page-context';
import { useEffect } from 'react';

export default function Page() {
  /**
   *  FILTER TOKO HEADER
   * */
  const setShowStoreFilter = usePageContext((s) => s.setShowStoreFilter);

  useEffect(() => {
    setShowStoreFilter(true);
    return () => setShowStoreFilter(false);
  }, [setShowStoreFilter]);
  return <UserProfile />;
}
