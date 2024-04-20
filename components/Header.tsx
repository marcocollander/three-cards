'use client';

import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';
import { FC, useState } from 'react';
import LoginNav from '@/components/LoginNav';

const Header: FC = () => {
    const classesSpan: string = 'bg-white w-[25px] h-[2px]';

    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(prevActive => !prevActive);
    };

    return (
        <header className='flex justify-evenly items-center bg-green-900 py-4 '>
            <Link href={'/'}>
                <Image
                    src={'/logo.jpg'}
                    alt={'logo'}
                    width={50}
                    height={50}
                    className='rounded-full'
                />
            </Link>
            <h1
                className={
                    'text-white tracking-wider sm:text-sm md:text-xl lx:text-2xl uppercase mr-[15%]'
                }
            >
                Gra w trzy karty
            </h1>
            <button
                className='z-20 flex flex-col w-[30px] h-[35px] justify-evenly lg:hidden absolute top-[10px] right-[5px]'
                onClick={handleClick}
            >
                <span
                    className={clsx(classesSpan, active ? 'hidden' : 'block')}
                ></span>
                <span
                    className={clsx(
                        classesSpan,
                        active ? 'rotate' : 'no-rotate',
                    )}
                ></span>
                <span
                    className={clsx(
                        classesSpan,
                        active ? 'reverse-rotate' : 'no-reverse-rotate',
                    )}
                ></span>
            </button>
            {active && (
                <ul
                    className={
                        'absolute py-6 rounded-2xl top-0 right-0 flex flex-col items-center' +
                        ' text-white w-1/2 sm:w-1/3  bg-green-400 text-base sm:text-lg tracking-wide z-10'
                    }
                >
                    <Link className={'mb-2'} onClick={handleClick} href={'/'}>
                        Gra
                    </Link>
                    <Link
                        className={'mb-2'}
                        onClick={handleClick}
                        href={'/rules'}
                    >
                        Zasady gry
                    </Link>
                    <LoginNav />
                </ul>
            )}
            <ul className={'hidden lg:flex justify-between text-white w-1/2'}>
                <Link href={'/'}>Gra</Link>
                <Link href={'/rules'}>Zasady gry</Link>
                <LoginNav />
            </ul>
        </header>
    );
};

export default Header;
