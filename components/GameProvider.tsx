'use client';

import React, { createContext, useState } from 'react';

export const GameContext = createContext({
    numberOfHits: 0,
    numberOfAttempts: 0,
    hitPercentage: 0,
    clickCounter: 0,
    changeNumberOfHits: () => {},
    changeNumberOfAttempts: () => {},
    changeHitPercentage: () => {},
    changeClickCounter: () => {},
});

const GameProvider = ({
    children,
}: Readonly<{ children: React.ReactNode }>) => {
    const [numberOfHits, setNumerOfHits] = useState(0);
    const [numberOfAttempts, setNumberOfAttempts] = useState(0);
    const [hitPercentage, setHitPercentage] = useState(0);
    const [clickCounter, setClickCounter] = useState(0);

    const changeNumberOfHits = () => {
        setNumerOfHits((prevState: number) => prevState + 1);
    };

    const changeNumberOfAttempts = () => {
        setNumberOfAttempts((prevState: number) => prevState + 1);
    };

    const changeHitPercentage = () => {
        if (numberOfAttempts !== 0) {
            setHitPercentage(() => (numberOfHits / numberOfAttempts) * 100);
        } else setHitPercentage(0);
    };

    const changeClickCounter = () => {
        setClickCounter(prevState => prevState + 1);
    };

    return (
        <GameContext.Provider
            value={{
                numberOfHits,
                numberOfAttempts,
                hitPercentage,
                clickCounter,
                changeNumberOfHits,
                changeNumberOfAttempts,
                changeHitPercentage,
                changeClickCounter,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

export default GameProvider;
