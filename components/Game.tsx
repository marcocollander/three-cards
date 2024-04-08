'use client';

import { FC, createContext, useState } from 'react';

import Cards from '@/components/Cards';
import ResultsForm from '@/components/ResultsForm';

interface gameContext {
    numberOfHits: number;
    numberOfAttempts: number;
    hitPercentage: number;
    clickCounter: number;
    setNumberOfHits: Function;
    setNumberOfAttempts: Function;
    setHitPercentage: Function;
    setClickCounter: Function;
}

let context: gameContext = {
    numberOfHits: 0,
    numberOfAttempts: 0,
    hitPercentage: 0,
    clickCounter: 0,
    setNumberOfHits(numberOfHits: number) {
        this.numberOfHits = numberOfHits;
    },
    setNumberOfAttempts(numberOfAttempts: number) {
        this.numberOfAttempts = numberOfAttempts;
    },
    setHitPercentage(hitPercentage: number) {
        this.hitPercentage = hitPercentage;
    },
    setClickCounter(clickCounter: number) {
        this.clickCounter = clickCounter;
    },
};

export const GameContext = createContext(context);

const Game: FC = () => {
    const [numberOfHits, setNumberOfHits] = useState(0);
    const [numberOfAttempts, setNumberOfAttempts] = useState(0);
    const [hitPercentage, setHitPercentage] = useState(0);
    const [clickCounter, setClickCounter] = useState(0);

    return (
        <main className='my-5'>
            <GameContext.Provider
                value={{
                    numberOfHits,
                    numberOfAttempts,
                    hitPercentage,
                    clickCounter,
                    setNumberOfHits,
                    setNumberOfAttempts,
                    setHitPercentage,
                    setClickCounter,
                }}
            >
                <Cards />
                <ResultsForm />
            </GameContext.Provider>
        </main>
    );
};

export default Game;
