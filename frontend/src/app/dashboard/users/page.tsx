'use client';

import { Button } from '@/components/button/button';
import { PageLayout } from '@/components/page-layout/page-layout';
import FilterUserList from '@/modules/user/components/filter-user-list';
import TableUser from '@/modules/user/components/table-user';
import { Plus } from '@icon-park/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { usePageContext } from '@/hooks/use-store-filter/use-page-context';

export default function page() {
  const router = useRouter();

  /**
   *  FILTER TOKO HEADER
   * */
  const setShowStoreFilter = usePageContext((s) => s.setShowStoreFilter);

  useEffect(() => {
    setShowStoreFilter(true);
    return () => setShowStoreFilter(false);
  }, [setShowStoreFilter]);
  /**
   *  END FILTER TOKO HEADER
   * */

  return (
    <PageLayout
      title="List User"
      button={
        <Button variant="outline" onClick={() => router.push('/dashboard/users/add')}>
          <Plus />
          Tambah User
        </Button>
      }
    >
      <FilterUserList />
      <TableUser />
    </PageLayout>
  );
}
