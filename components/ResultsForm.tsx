'use client';

import { FC, useState } from 'react';
import { classButton } from '@/styles/const/const-styles';

const ResultsForm: FC = () => {
    // let numberOfAttempts = 0;
    // let numberOfHits = 0;
    // let counter = 0;
    // const [counters, setCounters] = useState([
    //     numberOfAttempts,
    //     numberOfHits,
    //     counter,
    // ]);
    const [show, setShow] = useState(false);
    const handleResults = () => {
        setShow(prevState => !prevState);
    };
    const handleSubmit = () => {};

    return (
        <>
            <div className='flex justify-center flex-col items-center'>
                <button
                    onClick={handleResults}
                    className='border-white border-[1px] ml-5 my-10 px-4 py-1 text-md tracking-[2px] text-white rounded-[7px]'
                    type={'button'}
                    disabled={false}
                >
                    Pokaż wyniki
                </button>
            </div>
            {show && (
                <section className='my-5 flex justify-center flex-col items-center'>
                    <form className='lg:w-1/2 flex-col flex  items-center text-xl lg:text-2xl'>
                        <div className='flex flex-col lg:w-1/2 items-center'>
                            <label className={'mb-2'} htmlFor='numberOfHits'>
                                Ilość trafień:
                            </label>
                            <input
                                type='number'
                                name='numberOfHits'
                                id='numberOfHits'
                            />
                        </div>
                        <div className='m-3 flex flex-col items-center lg:w-1/2'>
                            <label
                                className={'mb-2'}
                                htmlFor='numberOfAttempts'
                            >
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
                            <label className={'mb-2'} htmlFor='hitPercentage'>
                                Procent trafień:{' '}
                            </label>
                            <input
                                type='number'
                                name='hitPercentage'
                                id='hitPercentage'
                            />
                        </div>
                        <button
                            className={classButton}
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
            )}
        </>
    );
};

export default ResultsForm;
