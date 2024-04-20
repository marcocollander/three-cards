import { FC } from 'react';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/app/api/auth/[...nextauth]/authConfig';
import { dbConnect } from '@/lib/dbConnect';
import GameProvider from '@/components/GameProvider';
import Cards from '@/components/Cards';
import ResultsForm from '@/components/ResultsForm';
import Link from 'next/link';

const Home: FC = async () => {
    let connection;
    try {
        connection = await dbConnect();
        if (connection !== null) {
            console.log('Połączono się z bazą danych.');
        }
    } catch (error) {
        console.log(error);
    }

    const data = await getServerSession(authConfig);

    return (
        <main className='my-5'>
            <div className='my-5 flex justify-center'>
                {data ? (
                    <p>Zalogowany użytkownik {data.user?.name}</p>
                ) : (
                    <p>
                        <Link href={'/login'}>Zaloguj się</Link>
                    </p>
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
