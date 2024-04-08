'use client';

import { FC, createContext, useContext, useState } from 'react';

import Cards from '@/components/Cards';
import ResultsForm from '@/components/ResultsForm';

export const GameContext = createContext({});

const Game: FC = () => {
    const [numberOfAttempts, setNumberOfAttempts] = useState(0);
    const [numberOfHits, setNumberOfHits] = useState(0);
    const [clickCounter, setClickCounter] = useState(0);

    return (
        <main className='my-5'>
            <GameContext.Provider
                value={{ numberOfAttempts, numberOfHits, clickCounter }}
            >
                <Cards
                    onClick={() =>
                        setNumberOfAttempts(prevState => prevState + 1)
                    }
                />
                <ResultsForm />
            </GameContext.Provider>
        </main>
    );
};

export default Game;
