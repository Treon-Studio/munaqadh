'use client';

import { setAuthToken } from '@/__generated__/api/client';
import Cookies from 'js-cookie';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const SetAxiosToken = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    const sessionToken = status === 'authenticated' && session?.token ? session.token : '';
    const cookieToken = Cookies.get('token');
    if (status !== 'authenticated') {
      Cookies.remove('token');
      setAuthToken('');
      return;
    }
    setAuthToken(sessionToken);
    if (sessionToken && cookieToken !== sessionToken) {
      Cookies.set('token', sessionToken);
    }
  }, [session?.token, status]);

  return null;
};

export default SetAxiosToken;
