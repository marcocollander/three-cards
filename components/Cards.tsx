'use client';

import { FC, useContext, useState } from 'react';
import clsx from 'clsx';
import Picture from '@/components/Picture';
import numbers from '@/lib/functions/cardDrawing';
import { GameContext } from '@/components/GameProvider';

const Cards: FC = () => {
    const gameContext = useContext(GameContext);
    const picturesCard = ['/dama-karo.png', '/dama-pik.png', '/dama-kier.png'];
    const [rotateCardZero, setRotateCardZero] = useState(false);
    const [rotateCardOne, setRotateCardOne] = useState(false);
    const [rotateCardTwo, setRotateCardTwo] = useState(false);
    const [disabledBtnStart, setDisabledBtnStart] = useState(false);
    const [indexes, setIndexes] = useState(numbers());
    const [cards, setCards] = useState(picturesCard);

    const handleStart = () => {
        setIndexes(numbers());
        setRotateCardZero(prevState => !prevState);
        setRotateCardOne(prevState => !prevState);
        setRotateCardTwo(prevState => !prevState);
        setDisabledBtnStart(prevState => !prevState);
        setCards([
            picturesCard[indexes[0]],
            picturesCard[indexes[1]],
            picturesCard[indexes[2]],
        ]);

        gameContext.changeNumberOfAttempts(10);
        gameContext.changeHitPercentage();
        gameContext.changeClickCounter(0);
    };

    const handleReset = () => {
        setRotateCardZero(prevState => !prevState);
        setRotateCardOne(prevState => !prevState);
        setRotateCardTwo(prevState => !prevState);
    };

    const handleClickCardZero = () => {
        gameContext.changeClickCounter(1);
        setRotateCardZero(prevState => !prevState);
        setDisabledBtnStart(prevState => !prevState);
        if (cards[0] === '/dama-pik.png' && gameContext.clickCounter === 0) {
            gameContext.changeNumberOfHits();
            setRotateCardOne(prevState => !prevState);
            setRotateCardTwo(prevState => !prevState);
        }
    };

    const handleClickCardOne = () => {
        gameContext.changeClickCounter(1);
        setRotateCardOne(prevState => !prevState);
        setDisabledBtnStart(prevState => !prevState);
        if (cards[1] === '/dama-pik.png' && gameContext.clickCounter === 0) {
            gameContext.changeNumberOfHits();
            setRotateCardZero(prevState => !prevState);
            setRotateCardTwo(prevState => !prevState);
        }
    };

    const handleClickCardTwo = () => {
        gameContext.changeClickCounter(1);
        setRotateCardTwo(prevState => !prevState);
        setDisabledBtnStart(prevState => !prevState);
        if (cards[2] === '/dama-pik.png' && gameContext.clickCounter === 0) {
            gameContext.changeNumberOfHits();
            setRotateCardZero(prevState => !prevState);
            setRotateCardOne(prevState => !prevState);
        }
    };

    return (
        <section className='sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/6 mx-auto'>
            <div className='flex justify-center'>
                <Picture
                    photoUrl={rotateCardZero ? '/back.png' : cards[0]}
                    className={clsx(
                        'ml-2 cursor-pointer',
                        rotateCardZero ? 'rotate-card' : 'no-rotate-card',
                    )}
                    onClick={handleClickCardZero}
                />
                <Picture
                    photoUrl={rotateCardOne ? '/back.png' : cards[1]}
                    className={clsx(
                        'ml-2 mr-2 cursor-pointer',
                        rotateCardOne ? 'rotate-card' : 'no-rotate-card',
                    )}
                    onClick={handleClickCardOne}
                />
                <Picture
                    photoUrl={rotateCardTwo ? '/back.png' : cards[2]}
                    className={clsx(
                        'mr-2 cursor-pointer',
                        rotateCardTwo ? 'rotate-card' : 'no-rotate-card',
                    )}
                    onClick={handleClickCardTwo}
                />
            </div>
            <div className='flex justify-center mt-10'>
                <button
                    onClick={handleStart}
                    disabled={disabledBtnStart}
                    className='border-white border-[1px] px-4 py-1 text-md tracking-[2px] text-white rounded-[7px]'
                    type='button'
                >
                    Start
                </button>
                <button
                    onClick={handleReset}
                    disabled={false}
                    className='border-white border-[1px] px-4 text-md ml-1 tracking-[2px] text-white rounded-[7px]'
                    type='button'
                >
                    Reset
                </button>
            </div>
        </section>
    );
};

export default Cards;
