'use client';

import { FC, ReactElement } from 'react';
import clsx from 'clsx';

interface IButton {
    className: string;
    type: string;
    disabled: boolean;
}

const classButton: string =
    'border-white border-[1px] ml-5 my-10 px-4' +
    ' py-1 text-md tracking-[2px] text-white rounded-[7px]';

let flag: boolean = true;

const handleClick = () => console.log('Hi');
const Button: FC<IButton> = ({
    className = clsx(classButton, flag && 'bg-slate-900'),
    type = 'button',
    onClick = handleClick,
    disabled,
    children,
}: any) => {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
