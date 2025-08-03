import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  hasTopPadding?: boolean;
}

export default function PageLayout({ children, hasTopPadding = true }: PageLayoutProps) {
  return (
    <div className={`w-full min-h-screen ${hasTopPadding ? 'pt-[80px]' : ''}`}>
      {children}
    </div>
  );
}