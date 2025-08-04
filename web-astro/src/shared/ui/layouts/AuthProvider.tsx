import { AuthProvider as PropelAuthProvider } from '@propelauth/react';
import { AuthProvider } from '@/features/auth/auth-context';
import type { ReactNode } from 'react';

interface AuthWrapperProps {
  children: ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const authUrl = import.meta.env.PUBLIC_AUTH_URL;

  if (!authUrl) {
    console.error('PUBLIC_AUTH_URL environment variable is not set');
    return <div>Authentication configuration error</div>;
  }

  return (
    <PropelAuthProvider authUrl={authUrl}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </PropelAuthProvider>
  );
}
