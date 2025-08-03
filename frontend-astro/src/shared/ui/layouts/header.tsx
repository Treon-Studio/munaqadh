import { useState } from 'react';
import CenterUnderline from '@/shared/ui/base/center-underline';
import svgPaths from '@/shared/ui/base/icons';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage?: 'home' | 'services' | 'contact';
}

function Logo() {
  return (
    <div className="block h-6 relative shrink-0 w-[32.234px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 24">
        <path d={svgPaths.p2e463780} fill="var(--fill-0, #F2F2F2)" id="Logo"/>
      </svg>
    </div>
  );
}

function NavLinks({ currentPage, onNavClick, isMobile = false }: { 
  currentPage?: string; 
  onNavClick?: () => void;
  isMobile?: boolean;
}) {
  const handleHomeClick = () => {
    const navigateTo = (window as any).navigateTo;
    if (navigateTo) {
      navigateTo('home');
    }
    onNavClick?.();
  };

  const handleServicesClick = () => {
    const navigateTo = (window as any).navigateTo;
    if (navigateTo) {
      navigateTo('services');
    }
    onNavClick?.();
  };

  const handleContactClick = () => {
    const navigateTo = (window as any).navigateTo;
    if (navigateTo) {
      navigateTo('contact');
    }
    onNavClick?.();
  };

  const linkClasses = isMobile 
    ? "text-white text-[16px] leading-[1.2] tracking-[-0.48px] transition-colors duration-200 ease-out hover:text-[rgb(247,244,235)]"
    : "text-white text-[13px] leading-[0.95] tracking-[-0.39px] whitespace-nowrap transition-colors duration-200 ease-out hover:text-[rgb(247,244,235)]";

  const containerClasses = isMobile
    ? "flex flex-col gap-[24px] items-center justify-center w-full"
    : "hidden md:flex flex-row font-['Geist:Regular'] font-normal gap-[37px] items-center justify-start";

  return (
    <div className={containerClasses} data-name="Nav links">
      <CenterUnderline
        as="button"
        className={`${linkClasses} ${currentPage === 'home' ? 'text-[rgb(247,244,235)]' : ''} bg-transparent border-0 p-0`}
        onClick={handleHomeClick}
        transition={{ duration: 0.2, ease: "easeOut" }}
        underlineHeightRatio={0.06}
      >
        Home
      </CenterUnderline>
      <CenterUnderline
        as="button"
        className={`${linkClasses} ${currentPage === 'services' ? 'text-[rgb(247,244,235)]' : 'text-[rgb(242,242,242)]'} bg-transparent border-0 p-0`}
        onClick={handleServicesClick}
        transition={{ duration: 0.2, ease: "easeOut" }}
        underlineHeightRatio={0.06}
      >
        Services
      </CenterUnderline>
      <CenterUnderline
        as="button"
        className={`${linkClasses} ${currentPage === 'contact' ? 'text-[rgb(247,244,235)]' : 'text-[rgb(242,242,242)]'} bg-transparent border-0 p-0`}
        onClick={handleContactClick}
        transition={{ duration: 0.2, ease: "easeOut" }}
        underlineHeightRatio={0.06}
      >
        Schedule a Consult
      </CenterUnderline>
    </div>
  );
}

function MobileMenu({ isOpen, currentPage, onClose }: { 
  isOpen: boolean; 
  currentPage?: string; 
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-[rgb(13,31,8)] border-t border-[rgba(255,255,255,0.1)] z-50">
      <div className="px-[20px] py-[32px]">
        <NavLinks currentPage={currentPage} onNavClick={onClose} isMobile />
      </div>
    </div>
  );
}

export default function Header({ currentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-40 w-full">
      <div className="bg-[rgb(13,31,8)] w-full">
        <nav className="relative">
          <div className="w-full max-w-[1280px] mx-auto px-[20px] md:px-[50px] py-[20px]">
            <div className="flex items-center justify-between w-full" data-name="Nav contents">
              <Logo />
              
              {/* Desktop Navigation */}
              <NavLinks currentPage={currentPage} />
              
              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-white hover:text-[rgb(247,244,235)] transition-colors duration-200"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <MobileMenu 
            isOpen={isMobileMenuOpen} 
            currentPage={currentPage} 
            onClose={closeMobileMenu} 
          />
        </nav>
      </div>
    </header>
  );
}