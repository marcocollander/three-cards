'use client';

import { FC, useState } from 'react';
import clsx from 'clsx';
import Picture from '@/components/Picture';
import Button from '@/components/Button';

const Game: FC = () => {
    const [rotate, setRotate] = useState(false);
    const [disabledBtnStart, setDisabledBtnStart] = useState(false);
    const [disabledBtnReset, setDisabledBtnReset] = useState(true);

    const [cards, setCards] = useState([
        '/dama-karo.png',
        '/dama-pik.png',
        '/dama-kier.png',
    ]);
    const handleStart = () => {
        setRotate(prevState => !prevState);
        setDisabledBtnStart(prevState => !prevState);
        setDisabledBtnReset(prevState => !prevState);
    };

    const handleReset = () => {
        setRotate(prevState => !prevState);
        setDisabledBtnStart(prevState => !prevState);
        setDisabledBtnReset(prevState => !prevState);
    };

    const handleClickCardZero = () => {};

    const handleClickCardOne = () => {};

    const handleClickCardTwo = () => {};

    return (
        <section
            className={'mt-10 sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/6 mx-auto'}
        >
            <div className={'flex justify-center h-98'}>
                <Picture
                    photoUrl={rotate ? '/back-card.png' : cards[0]}
                    className={clsx(
                        'my-5 ml- cursor-pointer',
                        rotate ? 'rotate-card' : 'no-rotate-card',
                    )}
                    onClick={handleClickCardZero}
                />
                <Picture
                    photoUrl={rotate ? '/back-card.png' : cards[1]}
                    className={clsx(
                        'my-5 ml-2 mr-2 cursor-pointer',
                        rotate ? 'rotate-card' : 'no-rotate-card',
                    )}
                    onClick={handleClickCardOne}
                />
                <Picture
                    photoUrl={rotate ? '/back-card.png' : cards[2]}
                    className={clsx(
                        'my-5 mr-2 cursor-pointer',
                        rotate ? 'rotate-card' : 'no-rotate-card',
                    )}
                    onClick={handleClickCardTwo}
                />
            </div>
            <div className={'flex justify-center'}>
                <Button onClick={handleStart} disabled={disabledBtnStart}>
                    Start
                </Button>
                <Button onClick={handleReset} disabled={disabledBtnReset}>
                    Reset
                </Button>
            </div>
        </section>
    );
};

export default Game;
