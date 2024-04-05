import React from 'react';
import Button from '@/components/Button';

const Reset = () => {
    return (
        <main>
            <section>
                <h1>Zresetuj swoje hasło</h1>
                <form action=''>
                    <input type='email' placeholder='Email' />
                    <Button
                        disabled={false}
                        onClick={() => console.log('Resetowanie')}
                        type={'submit'}
                        className={
                            'border-white border-[1px] ml-5 my-10 px-4 py-1 text-md tracking-[2px] text-white rounded-[7px]'
                        }
                    >
                        Zresetuj swoje hasło
                    </Button>
                </form>
            </section>
        </main>
    );
};

export default Reset;
