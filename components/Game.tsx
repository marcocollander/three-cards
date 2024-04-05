'use client';

import { FC, useState } from 'react';
import clsx from 'clsx';
import Picture from '@/components/Picture';
import Button from '@/components/Button';
import numbers from '@/lib/functions/cardDrawing';

const Game: FC = () => {
    const picturesCard = ['/dama-karo.png', '/dama-pik.png', '/dama-kier.png'];
    const [rotateCardZero, setRotateCardZero] = useState(false);
    const [rotateCardOne, setRotateCardOne] = useState(false);
    const [rotateCardTwo, setRotateCardTwo] = useState(false);
    const [disabledBtnStart, setDisabledBtnStart] = useState(false);
    const [disabledBtnReset, setDisabledBtnReset] = useState(true);
    const [indexes, setIndexes] = useState(numbers());
    const [cards, setCards] = useState(picturesCard);

    const handleStart = () => {
        setIndexes(numbers());
        setRotateCardZero(prevState => !prevState);
        setRotateCardOne(prevState => !prevState);
        setRotateCardTwo(prevState => !prevState);
        setDisabledBtnStart(prevState => !prevState);
        setDisabledBtnReset(prevState => !prevState);
    };

    const handleReset = () => {
        setRotateCardZero(prevState => !prevState);
        setRotateCardOne(prevState => !prevState);
        setRotateCardTwo(prevState => !prevState);
        setDisabledBtnStart(prevState => !prevState);
        setDisabledBtnReset(prevState => !prevState);
    };

    const handleClickCardZero = () => {
        setRotateCardZero(prevState => !prevState);
        // setIndexes(numbers());
        setCards([
            picturesCard[indexes[0]],
            picturesCard[indexes[1]],
            picturesCard[indexes[2]],
        ]);
        setDisabledBtnStart(prevState => !prevState);
        setDisabledBtnReset(prevState => !prevState);
    };

    const handleClickCardOne = () => {
        setRotateCardOne(prevState => !prevState);
        // setIndexes(numbers());
        setCards([
            picturesCard[indexes[0]],
            picturesCard[indexes[1]],
            picturesCard[indexes[2]],
        ]);
        setDisabledBtnStart(prevState => !prevState);
        setDisabledBtnReset(prevState => !prevState);
    };

    const handleClickCardTwo = () => {
        setRotateCardTwo(prevState => !prevState);
        // setIndexes(numbers());
        setCards([
            picturesCard[indexes[0]],
            picturesCard[indexes[1]],
            picturesCard[indexes[2]],
        ]);
        setDisabledBtnStart(prevState => !prevState);
        setDisabledBtnReset(prevState => !prevState);
    };

    return (
        <section
            className={'mt-10 sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/6 mx-auto'}
        >
            <div className={'flex justify-center h-98'}>
                <Picture
                    photoUrl={rotateCardZero ? '/back-card.png' : cards[0]}
                    className={clsx(
                        'my-5 ml- cursor-pointer',
                        rotateCardZero ? 'rotate-card' : 'no-rotate-card',
                    )}
                    onClick={handleClickCardZero}
                />
                <Picture
                    photoUrl={rotateCardOne ? '/back-card.png' : cards[1]}
                    className={clsx(
                        'my-5 ml-2 mr-2 cursor-pointer',
                        rotateCardOne ? 'rotate-card' : 'no-rotate-card',
                    )}
                    onClick={handleClickCardOne}
                />
                <Picture
                    photoUrl={rotateCardTwo ? '/back-card.png' : cards[2]}
                    className={clsx(
                        'my-5 mr-2 cursor-pointer',
                        rotateCardTwo ? 'rotate-card' : 'no-rotate-card',
                    )}
                    onClick={handleClickCardTwo}
                />
            </div>
            <div className='flex justify-center'>
                <Button
                    onClick={handleStart}
                    disabled={disabledBtnStart}
                    className='border-white border-[1px] ml-5 my-10 px-4 py-1 text-md tracking-[2px] text-white rounded-[7px]'
                    type='button'
                >
                    Start
                </Button>
                <Button
                    onClick={handleReset}
                    disabled={disabledBtnReset}
                    className='border-white border-[1px] ml-5 my-10 px-4 py-1 text-md tracking-[2px] text-white rounded-[7px]'
                    type='button'
                >
                    Reset
                </Button>
            </div>
        </section>
    );
};

export default Game;
