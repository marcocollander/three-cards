import bcrypt from 'bcrypt';
import Credentials from 'next-auth/providers/credentials';
import { getUserByEmail } from '@/lib/actions/user.action';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    providers: [
        Credentials({
            async authorize(credentials: Record<string, string>): Promise<any> {
                const email = credentials?.email.toLowerCase();
                const password = credentials?.password;

                const user = await getUserByEmail(email);
                if (user && (await bcrypt.compare(password, user.password))) {
                    return {
                        ...user,
                        image: user.imageUrl,
                    };
                }
                return null;
            },
        }),
    ],
};
