import { useState, useEffect } from 'react';
import { DonationDesktop, DonationMobile } from './components';
import Header from '@/shared/ui/layouts/header';
import { useIsMobile } from '@/shared/hooks/use-is-mobile';

export default function DonationPage() {
  const isMobile = useIsMobile();

  const renderPage = () => {
    return isMobile ? <DonationMobile /> : <DonationDesktop />;
  };

  return (
    <div className="w-full min-h-screen">
      <Header currentPage="donation" />
      <div className="w-full">
        {renderPage()}
      </div>
    </div>
  );
}
