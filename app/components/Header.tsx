'use client';
import Image from "next/image";
import clsx from 'clsx';
import {useState} from "react";
import Link from "next/link";


const Header = ({active, onClick}:any) => {

    const classesSpan: string = 'bg-white w-[25px] h-[2px]';

    return (
        <header className="flex justify-evenly  items-center   bg-green-900 py-6 ">
            <Image
                src={'/logo.jpg'}
                alt={'logo'}
                width={50}
                height={50}
                className="rounded-full"
            />
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
            { active &&
            <ul className={'absolute py-6 rounded-2xl text-center top-[25px] right-[10px] flex flex-col text-white w-1/2 bg-green-400'}>
                <Link href={'/'}>Gra</Link>
                <Link href={'/rules'}>Zasady gry</Link>
                <Link href={'/auth/login'}>Logowanie</Link>
                <Link href={'/auth/register'}>Rejestracja</Link>
                <Link href={'/profile'}>Profil</Link>
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
