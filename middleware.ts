import NextAuth from 'next-auth';
import authConfig from './auth.config';

export const { auth: middleware } = NextAuth(authConfig);

export default middleware((req) => {});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
