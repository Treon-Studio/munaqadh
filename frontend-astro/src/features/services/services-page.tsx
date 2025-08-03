import { useState, useEffect } from 'react';
import ServicesDesktop from './components/services-desktop';
import ServicesMobile from './components/services-mobile';
import Header from '@/shared/ui/layouts/header';
import { useIsMobile } from '@/shared/hooks/use-is-mobile';



export default function App() {
  const isMobile = useIsMobile();


  const renderPage = () => {
    return isMobile ? <ServicesMobile /> : <ServicesDesktop />;
  };

  return (
    <div className="w-full min-h-screen">
      <Header currentPage={'services'} />
      <div className="w-full">
        {renderPage()}
      </div>
    </div>
  );
}