import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Facebook from 'next-auth/providers/facebook';
import Twitter from 'next-auth/providers/twitter';
import type { NextAuthConfig } from 'next-auth';

export default {
  providers: [Google, Facebook, Twitter, GitHub],
  pages: {
    signIn: '/auth/login',
  },
} satisfies NextAuthConfig;
