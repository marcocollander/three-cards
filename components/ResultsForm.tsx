'use client';

import { FC, useContext } from 'react';
import { GameContext } from '@/components/GameProvider';

const ResultsForm: FC = () => {
    const handleSubmit = () => {};
    const gameContext = useContext(GameContext);
    let numberOfHits = gameContext.numberOfHits;
    let numberOfAttempts = gameContext.numberOfAttempts;
    let hitPercentage = gameContext.hitPercentage;

    return (
        <section className='my-4 flex justify-center flex-col items-center'>
            <form className='lg:w-1/2 flex-col flex  items-center text-md lg:text-xl'>
                <div className='flex flex-col lg:w-1/2 items-center'>
                    <label className='mb-1' htmlFor='numberOfHits'>
                        Ilość trafień:
                    </label>
                    <input
                        value={numberOfHits}
                        type='number'
                        name='numberOfHits'
                        id='numberOfHits'
                    />
                </div>
                <div className='m-3 flex flex-col items-center lg:w-1/2'>
                    <label className='mb-1' htmlFor='numberOfAttempts'>
                        Ilość prób:
                    </label>
                    <input
                        value={numberOfAttempts}
                        type='number'
                        name='numberOfAttempts'
                        id='numberOfAttempts'
                    />
                </div>
                <div className={'flex flex-col items-center lg:w-1/2'}>
                    <label className='mb-1' htmlFor='hitPercentage'>
                        Procent trafień:
                    </label>
                    <input
                        value={hitPercentage.toFixed(2)}
                        type='number'
                        name='hitPercentage'
                        id='hitPercentage'
                    />
                </div>
                <button
                    className='border-white border-[1px] my-5 px-3 py-2 text-sm tracking-[2px] text-white rounded-[7px]'
                    disabled={false}
                    type='submit'
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
