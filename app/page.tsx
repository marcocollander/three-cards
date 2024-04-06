import { FC } from 'react';
import ResultsForm from '@/components/ResultsForm';
import Game from '@/components/Game';

const Home: FC = () => {
    return (
        <main className='my-5'>
            <Game />
            <ResultsForm />
        </main>
    );
};

export default Home;
