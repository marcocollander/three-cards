import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

// @ts-ignore
export default function LoginNav({ onClick }) {
    const { status, data: session } = useSession();

    return (
        <div className='navbar-end'>
            {status === 'authenticated' && (
                <div className='dropdown dropdown-end'>
                    <div
                        tabIndex={1}
                        role='button'
                        className='btn btn-ghost btn-circle avatar mx-auto'
                    >
                        <div className='w-48 rounded-full flex flex-col items-center'>
                            <Image
                                alt='Profile Picture'
                                src={session.user?.image ?? '/default-user.png'}
                                width={60}
                                height={60}
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
                    >
                        <li>
                            <Link href='/profile' onClick={onClick}>
                                Profile
                            </Link>
                        </li>
                        <li>
                            {/*@ts-ignore*/}
                            <Link href='' onClick={signOut}>
                                Sign Out
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
            {status === 'unauthenticated' && (
                <div className='menu-horizontal'>
                    <li className={'mr-3'}>
                        <Link onClick={onClick} href='/login'>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link href='/signup'>Sign Up</Link>
                    </li>
                </div>
            )}
        </div>
    );
}
