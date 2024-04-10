'use client';

import React, { createContext, useState } from 'react';

export const GameContext = createContext({
    numberOfHits: 0,
    numberOfAttempts: 0,
    hitPercentage: 0,
    clickCounter: 0,
    changeNumberOfHits: () => {},
    changeNumberOfAttempts: (quantity: number) => {},
    changeHitPercentage: () => {},
    changeClickCounter: (quantity: number) => {},
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

    const changeNumberOfAttempts = (quantity: number) => {
        setNumberOfAttempts((prevState: number) => prevState + 1);
        if (numberOfAttempts >= quantity) {
            alert(
                'Koniec gry. Jeśli jesteś zalogowany to Wyślij wynik na server',
            );
            setNumberOfAttempts(0);
            setHitPercentage(0);
            setNumerOfHits(0);
        }
    };

    const changeHitPercentage = () => {
        if (numberOfAttempts !== 0) {
            setHitPercentage(() => (numberOfHits / numberOfAttempts) * 100);
        } else setHitPercentage(0);
    };

    const changeClickCounter = (quantity: number) => {
        setClickCounter(quantity);
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
