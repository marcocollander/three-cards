'use client';
import Image from "next/image";
import clsx from 'clsx';
import {useState} from "react";


const Header = () => {
    const [active, setActive] = useState(false);
    const classesSpan: string = 'bg-white w-[25px] h-[2px]';
    const handleClick = () => {
        setActive((prevActive) => !prevActive);
    };
    return (
        <header className="flex justify-around items-center   bg-green-900 py-6 ">
            <Image
                src={'/logo.jpg'}
                alt={'logo'}
                width={50}
                height={50}
                className="rounded-full"
            />
            <h1 className={'text-white tracking-wider text-xl uppercase'}>Gra w trzy karty</h1>
            <button
                className="flex flex-col w-[30px] h-[35px] justify-evenly"
                onClick={handleClick}
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
        </header>
    )
};

export default Header;
