import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useAuthInfo, useLogoutFunction, useRedirectFunctions } from '@propelauth/react';

interface User {
  userId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  orgMemberships?: Array<{
    orgId: string;
    orgName: string;
    userRole: string;
  }>;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  isAdmin: boolean;
  login: () => void;
  logout: () => void;
  signup: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const authInfo = useAuthInfo();
  const logout = useLogoutFunction();
  const { redirectToLoginPage, redirectToSignupPage } = useRedirectFunctions();
  
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (authInfo.loading) {
      setIsLoading(true);
      return;
    }

    if (authInfo.isLoggedIn && authInfo.user) {
      setUser({
        userId: authInfo.user.userId,
        email: authInfo.user.email,
        firstName: authInfo.user.firstName,
        lastName: authInfo.user.lastName,
        orgMemberships: authInfo.user.orgMemberships,
      });
    } else {
      setUser(null);
    }
    
    setIsLoading(false);
  }, [authInfo]);

  // Check if user is admin (you can customize this logic)
  const isAdmin = user?.orgMemberships?.some(
    membership => membership.userRole === 'Admin' || membership.userRole === 'Owner'
  ) || false;

  const contextValue: AuthContextType = {
    user,
    isLoading,
    isLoggedIn: !!user,
    isAdmin,
    login: redirectToLoginPage,
    logout,
    signup: redirectToSignupPage,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
