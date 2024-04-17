'use client';

import { useState } from 'react';
import { createUser } from '@/lib/actions/user.action';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignUpForm() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {
            const user = await createUser({
                email: email,
                name: name,
                password: password,
            });

            if (user) {
                const res = await signIn('credentials', {
                    email,
                    password,
                    redirect: false,
                });
                if (res?.status === 200) {
                    toast.success('Rejestracja zakończona sukcesem');
                    router.push('/profile');
                }
            }
        } catch (error) {
            toast.error(
                'Rejestracja się nie powiodła się: Ten email jest już zarejestrowany',
            );
        }
    };

    return (
        <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='space-y-2'>
                <label
                    className='label tracking-wide text-center'
                    htmlFor='name'
                >
                    Imię
                </label>
                <input
                    id='name'
                    className='input input-bordered w-full tracking-wide bg-green-900 text-center'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type='text'
                    placeholder='Wprowadz swoje imię'
                    required
                />
            </div>
            <div className='space-y-2'>
                <label className='label tracking-wide' htmlFor='email'>
                    Email
                </label>
                <input
                    id='email'
                    className='input input-bordered w-full tracking-wide bg-green-900 text-center'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type='email'
                    placeholder='Enter your email address'
                    required
                />
            </div>
            <div className='space-y-2'>
                <label className='label tracking-wide' htmlFor='password'>
                    Hasło
                </label>
                <input
                    id='password'
                    className='input input-bordered w-full tracking-wide bg-green-900 text-center'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type='password'
                    placeholder='Wprowadz hasło'
                    required
                    minLength={6}
                />
            </div>
            <button className='btn btn-success btn-block tracking-wide text-lg block'>
                Zarejestruj się
            </button>
        </form>
    );
}
