import React from 'react';
import Button from '@/components/Button';

const Register = () => {
    return (
        <section>
            <h1>Rejestracja</h1>
            <form action=''>
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    required
                />
                <input type='email' name='email' placeholder='Email' required />
                <input
                    type='password'
                    name='password'
                    placeholder='Hasło'
                    required
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Powtórz hasło'
                    required
                />
                <Button
                    type={'button'}
                    disabled={false}
                    className='border-white border-[1px] ml-5 my-10 px-4 py-1 text-md tracking-[2px] text-white rounded-[7px]'
                    onClick={() => console.log('Rejestrowanie')}
                >
                    Zarejestruj
                </Button>
            </form>
        </section>
    );
};

export default Register;
