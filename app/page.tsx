import { FC } from 'react';
import GameProvider from '@/components/GameProvider';
import Cards from '@/components/Cards';
import ResultsForm from '@/components/ResultsForm';

const Home: FC = () => {
    return (
        <main className='my-5'>
            <GameProvider>
                <Cards />
                <ResultsForm />
            </GameProvider>
        </main>
    );
};

export default Home;
