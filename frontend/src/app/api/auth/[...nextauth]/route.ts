import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        whatsapp: {
          label: 'Nomor WhatsApp',
          type: 'tel',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Mock user data
        const mockUser = {
          whatsapp: '08123456789',
          password: 'mockpassword',
          id: '08123456789',
          token: 'mock-token',
          role: 'admin',
        };
        const whatsapp = credentials?.whatsapp ?? '';
        const password = credentials?.password ?? '';
        if (
          whatsapp === mockUser.whatsapp &&
          password === mockUser.password
        ) {
          return {
            id: mockUser.id,
            whatsapp: mockUser.whatsapp,
            token: mockUser.token,
            role: mockUser.role,
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/sign-in',
    error: '/sign-in',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const customUser = user as {
          id: string;
          role?: string;
          name?: string;
          token?: string;
          organization?: string;
        };
        token.id = customUser.id;
        if (customUser.role) token.role = customUser.role;
        if (customUser.name) token.name = customUser.name;
        if (customUser.token) token.token = customUser.token;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        const user = session.user as {
          id?: string;
          role?: string;
          name?: string;
          email?: string;
          image?: string;
          organization?: boolean;
        };
        user.id = token.id as string;
        user.role = (token as { role?: string }).role as string;
        user.name = (token as { name?: string }).name as string;
        if (token.token) {
          session.token = (token as { token?: string }).token as string;
        }
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
