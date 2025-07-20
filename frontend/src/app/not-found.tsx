export const dynamic = 'force-dynamic';

import KBar from '@/components/kbar/kbar';
import PageContainer from '@/components/layouts/page-container';
import { PageLayout } from '@/components/page-layout/page-layout';
import { EmptyState } from '@/components/state/empty-state/empty-state';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Munaqadh - Not Found',
  description: 'Dashboard Zycash',
};

export default async function NotFoundPage() {
  return (
    <KBar>
          <PageContainer>
            <PageLayout title="404 - Page Not Found">
              <EmptyState />
            </PageLayout>
          </PageContainer>
    </KBar>
  );
}
