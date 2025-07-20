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
        const mockUsers = [
          {
            whatsapp: '08123456789',
            password: 'mockpassword',
            id: '08123456789',
            token: 'mock-token-admin',
            role: 'admin',
          },
          {
            whatsapp: '08129876543',
            password: 'mockuser',
            id: '08129876543',
            token: 'mock-token-user',
            role: 'user',
          },
        ];
        const whatsapp = credentials?.whatsapp ?? '';
        const password = credentials?.password ?? '';
        const user = mockUsers.find(
          (u) => u.whatsapp === whatsapp && u.password === password
        );
        if (user) {
          return {
            id: user.id,
            whatsapp: user.whatsapp,
            token: user.token,
            role: user.role,
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
        token.id = user.id;
        token.role = user.role;
        token.name = user.whatsapp;
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.name = token.name;
        session.token = token.token;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
