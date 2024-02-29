import Image from "next/image";
import clsx from 'clsx';
import Link from "next/link";
import {FC} from "react";

interface IHeader {
    active: boolean;

    onClick(): void;
}

const Header: FC<IHeader> = ({active, onClick}) => {
    const classesSpan: string = 'bg-white w-[25px] h-[2px]';

    return (
        <header className="flex justify-evenly  items-center   bg-green-900 py-6 ">
            <Link href={'/'}>
                <Image
                    src={'/logo.jpg'}
                    alt={'logo'}
                    width={50}
                    height={50}
                    className="rounded-full"
                />
            </Link>
            <h1 className={'text-white tracking-wider sm:text-xl md:text-2xl lx:text-3xl  uppercase'}>Gra w trzy
                karty</h1>
            <button
                className="z-10 flex flex-col w-[30px] h-[35px] justify-evenly lg:hidden"
                onClick={onClick}
            >
                <span className={clsx(classesSpan, active ? 'hidden' : 'block')}></span>
                <span
                    className={clsx(classesSpan, active ? 'rotate' : 'no-rotate')}
                ></span>
                <span
                    className={clsx(
                        classesSpan,
                        active ? 'reverse-rotate' : 'no-reverse-rotate'
                    )}
                ></span>
            </button>
            {active &&
                <ul className={'absolute py-6 rounded-2xl text-center top-[25px] right-[10px] flex flex-col text-white w-1/2 bg-green-400'}>
                    <Link onClick={onClick} href={'/'}>Gra</Link>
                    <Link onClick={onClick} href={'/rules'}>Zasady gry</Link>
                    <Link onClick={onClick} href={'/auth/login'}>Logowanie</Link>
                    <Link onClick={onClick} href={'/auth/register'}>Rejestracja</Link>
                    <Link onClick={onClick} href={'/profile'}>Profil</Link>
                </ul>
            }
            <ul className={'hidden lg:flex justify-between text-white w-1/2'}>
                <Link href={'/'}>Gra</Link>
                <Link href={'/rules'}>Zasady gry</Link>
                <Link href={'/auth/login'}>Logowanie</Link>
                <Link href={'/auth/register'}>Rejestracja</Link>
                <Link href={'/profile'}>Profil</Link>
            </ul>
        </header>

    )
};

export default Header;
