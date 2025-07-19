'use client';

// import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
// import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

// Mock session to use when auth is disabled
// const MockSessionProvider = ({ children }: { children: ReactNode }) => {
//   // Mock admin user session - structure matches next-auth Session type
//   const mockSession = {
//     user: {
//       id: '1',
//       name: 'Admin User',
//       email: 'admin@example.com',
//       image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
//       role: 'admin',
//     },
//     expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
//   } as Session;

//   // Use the actual SessionProvider with our mock session
//   return <SessionProvider session={mockSession}>{children}</SessionProvider>;
// };

// No need for custom SessionContext anymore as we're using the real SessionProvider

export default function NextAuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  // const [authState, setAuthState] = useState<'loading' | 'disabled' | 'enabled'>('loading');

  // Check if authentication should be disabled on component mount
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     // Check various sources for the disable flag
  //     const fromEnv = process.env.NEXT_PUBLIC_DISABLE_AUTH === 'true';
  //     const fromLocalStorage = localStorage.getItem('DISABLE_AUTH') === 'true';
  //     const fromWindow =
  //       (window as Window & { __NEXT_PUBLIC_DISABLE_AUTH__?: string })
  //         .__NEXT_PUBLIC_DISABLE_AUTH__ === 'true';

  //     // Any of these sources can disable auth
  //     const isDisabled = fromEnv || fromLocalStorage || fromWindow;

  //     // Store the value for easy access elsewhere
  //     if (isDisabled) {
  //       localStorage.setItem('DISABLE_AUTH', 'true');
  //       (window as Window & { __NEXT_PUBLIC_DISABLE_AUTH__?: string })
  //         .__NEXT_PUBLIC_DISABLE_AUTH__ = 'true';
  //       setAuthState('disabled');
  //     } else {
  //       setAuthState('enabled');
  //     }
  //   }
  // }, []);

  // Show a loading state while determining if auth should be disabled
  // if (authState === 'loading') {
  //   return <div>Loading authentication state...</div>;
  // }

  // Use mock provider if auth is disabled
  // if (authState === 'disabled') {
  //   return <MockSessionProvider>{children}</MockSessionProvider>;
  // }

  // Normal auth flow
  return <SessionProvider>{children}</SessionProvider>;
}
