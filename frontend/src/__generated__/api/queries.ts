import axios from 'axios'
import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        phone: { label: 'Nomor WhatsApp', type: 'tel' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.phone || !credentials?.password) {
          throw new Error('Phone and password required');
        }

        try {
          const response = await axios.post(
            'https://staging-zycas.kumpulkebon.com/api/root/token',
            {
              phone: credentials.phone,
              password: credentials.password,
            },
            {
              headers: {
                'accept': 'application/json',
                'x-device-id': '1',
                'Content-Type': 'application/json',
              },
            }
          );

          const data = response.data;

          // You can adjust this according to the returned user/token structure
          if (data && data.token) {
            return {
              id: credentials.phone,
              phone: credentials.phone,
              token: data.token,
              role: data.role || 'admin', // Add role (default to 'admin' if not present)
            };
          }
          return null;
        } catch (error) {
          if (
            typeof error === 'object' &&
            error !== null &&
            'response' in error &&
            typeof (error as { response?: unknown }).response === 'object' &&
            (error as { response?: unknown }).response !== null
          ) {
            const response = (error as { response?: unknown }).response;
            if (
              typeof response === 'object' &&
              response !== null &&
              'data' in response &&
              typeof (response as { data?: unknown }).data === 'object' &&
              (response as { data?: unknown }).data !== null
            ) {
              const data = (response as { data?: unknown }).data;
              if (
                typeof data === 'object' &&
                data !== null &&
                'message' in data &&
                typeof (data as { message?: unknown }).message === 'string'
              ) {
                throw new Error((data as { message: string }).message || 'Login failed');
              }
            }
          }
          throw new Error('Login failed');
        }
      },
    }),
  ],
  pages: {
    signIn: '/sign-in',
    error: '/sign-in', // Error code passed in query string as ?error=
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      // Add user data to the token when first signed in
      if (user) {
        // Use type assertion for custom user properties
        const customUser = user as { id: string; role?: string; name?: string };
        token.id = customUser.id;
        if (customUser.role) token.role = customUser.role;
        if (customUser.name) token.name = customUser.name;
      }
      return token;
    },
    async session({ session, token }) {
      // Add user data from token to the session
      if (session.user) {
        // Use type assertion for the session.user to add custom properties
        const user = session.user as {
          id?: string;
          role?: string;
          name?: string;
          email?: string;
          image?: string;
        };
        user.id = token.id as string;
        // Use interface JWT from types instead of any
        user.role = (token as { role?: string }).role as string;
        user.name = (token as { name?: string }).name as string;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
