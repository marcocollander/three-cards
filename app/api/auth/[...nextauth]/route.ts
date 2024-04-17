import NextAuth from 'next-auth';
import { authConfig } from './authConfig';

// @ts-ignore
const handler = NextAuth(authConfig);
export { handler as GET, handler as POST };
