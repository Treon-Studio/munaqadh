import { useState, useEffect } from 'react';
import ContactDesktop from './components/contact-desktop';
import ContactMobile from './components/contact-mobile';
import Header from '@/shared/ui/layouts/header';
import { useIsMobile } from '@/shared/hooks/use-is-mobile';


export default function App() {
  const isMobile = useIsMobile();


  const renderPage = () => {
    return isMobile ? <ContactMobile /> : <ContactDesktop />;
  };

  return (
    <div className="w-full min-h-screen">
      <Header currentPage={'contact'} />
      <div className="w-full">
        {renderPage()}
      </div>
    </div>
  );
}