import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import authConfig from '../auth.config';
import prisma from './prisma';

declare module '@auth/core/types' {
  interface Session {
    user: {
      id: string;
      access_token?: string;
    } & DefaultSession['user'];
  }

  interface JWT {
    id: string;
    access_token?: string;
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        user.id === token.sub;
        token.access_token = account.access_token;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        if (token.sub) session.user.id = token.sub;
        if (token.access_token)
          session.user.access_token = token.access_token as string;
      }

      return session;
    },
  },

  ...authConfig,
});
