import { getServerSession } from 'next-auth';
import { authConfig } from '@/app/api/auth/[...nextauth]/authConfig';
import { getUserByEmail } from '@/lib/actions/user.action';
import UserForm from '@/components/UserForm';

export default async function Profile() {
    let user = {};

    const data = await getServerSession(authConfig);

    if (data?.user) {
        // @ts-ignore
        user = await getUserByEmail(data.user?.email);
    }

    return (
        <div className='py-12 px-4 mx-auto max-w-3xl'>
            <h2 className='mb-4 text-3xl text-center font-normal'>
                Strona użytkownika {data?.user?.name}
            </h2>
            <UserForm user={user} />
        </div>
    );
}
