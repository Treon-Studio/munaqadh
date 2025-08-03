import { useState, useEffect } from 'react';
import HomeDesktop from './components/home-desktop';
import HomeMobile from './components/home-mobile';
import Header from '@/shared/ui/layouts/header';
import { useIsMobile } from '@/shared/hooks/use-is-mobile';

export default function App() {
  const isMobile = useIsMobile();

  const renderPage = () => {
    return isMobile ? <HomeMobile /> : <HomeDesktop />;
  };

  return (
    <div className="w-full min-h-screen">
      <Header currentPage="home" />
      <div className="w-full">
        {renderPage()}
      </div>
    </div>
  );
}