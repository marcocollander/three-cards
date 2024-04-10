import { FC } from 'react';
import GameProvider from '@/components/GameProvider';
import Cards from '@/components/Cards';
import ResultsForm from '@/components/ResultsForm';
import { dbConnect } from '@/lib/dbConnect';

const Home: FC = async () => {
    let connection;
    try {
        connection = await dbConnect();
    } catch (error) {
        console.log(error);
    }
    return (
        <main className='my-5'>
            <div className='my-5 flex justify-center'>
                {connection ? (
                    <p>Database is connected!</p>
                ) : (
                    <p> Database NOT connected!</p>
                )}
            </div>
            <GameProvider>
                <Cards />
                <ResultsForm />
            </GameProvider>
        </main>
    );
};

export default Home;
