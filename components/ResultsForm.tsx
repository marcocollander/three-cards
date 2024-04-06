'use client';

import { FC } from 'react';

const ResultsForm: FC = () => {
    // let numberOfAttempts = 0;
    // let numberOfHits = 0;
    // let counter = 0;
    // const [counters, setCounters] = useState([
    //     numberOfAttempts,
    //     numberOfHits,
    //     counter,
    // ]);
    const handleSubmit = () => {};

    return (
        <section className='my-4 flex justify-center flex-col items-center'>
            <form className='lg:w-1/2 flex-col flex  items-center text-md lg:text-xl'>
                <div className='flex flex-col lg:w-1/2 items-center'>
                    <label className={'mb-1'} htmlFor='numberOfHits'>
                        Ilość trafień:
                    </label>
                    <input
                        type='number'
                        name='numberOfHits'
                        id='numberOfHits'
                    />
                </div>
                <div className='m-3 flex flex-col items-center lg:w-1/2'>
                    <label className={'mb-1'} htmlFor='numberOfAttempts'>
                        Ilość prób:
                    </label>
                    <input
                        className={''}
                        type='number'
                        name='numberOfAttempts'
                        id='numberOfAttempts'
                    />
                </div>
                <div className={'flex flex-col items-center lg:w-1/2'}>
                    <label className={'mb-1'} htmlFor='hitPercentage'>
                        Procent trafień:{' '}
                    </label>
                    <input
                        type='number'
                        name='hitPercentage'
                        id='hitPercentage'
                    />
                </div>
                <button
                    className='border-white border-[1px] my-5 px-3 py-2 text-sm tracking-[2px] text-white rounded-[7px]'
                    disabled={false}
                    type={'submit'}
                    onClick={handleSubmit}
                >
                    Wynik wyślij na serwer
                </button>
            </form>
            <div>
                <p>Hit message</p>
            </div>
        </section>
    );
};

export default ResultsForm;
