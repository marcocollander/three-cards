'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

const Login = () => {
    return (
        <section>
            <h1>Logowanie</h1>
            <form action='' method='post'>
                <input
                    type='email'
                    name='email'
                    required
                    placeholder={'Email'}
                />
                <input
                    type='password'
                    name='password'
                    required
                    placeholder={'Password'}
                />
                <Button
                    type='button'
                    className={
                        'border-white border-[1px] ml-5 my-10 px-4 py-1 text-md tracking-[2px] text-white rounded-[7px]'
                    }
                    disabled={false}
                    onClick={() => console.log('Logowanie')}
                >
                    Log
                </Button>
            </form>
            <div>
                <p>Zapomniałeś hasła</p>
                <Link href='/reset'>kliknij tutaj aby je zresetować</Link>
                <p>Nowy użytkownik?</p>
                <Link href='/register'>Zarejestruj się</Link>
            </div>
        </section>
    );
};

export default Login;
