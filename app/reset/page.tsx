import React from 'react';

const Reset = () => {
    return (
        <main>
            <section>
                <h1>Zresetuj swoje hasło</h1>
                <form action=''>
                    <input type='email' placeholder='Email' />
                    <button
                        disabled={false}
                        onClick={() => console.log('Resetowanie')}
                        type={'button'}
                        className={
                            'border-white border-[1px] ml-5 my-10 px-4 py-1 text-md tracking-[2px] text-white rounded-[7px]'
                        }
                    >
                        Zresetuj swoje hasło
                    </button>
                </form>
            </section>
        </main>
    );
};

export default Reset;
