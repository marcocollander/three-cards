'use client';

import React, { FC } from 'react';

interface IButton {
    className: string;
    type: string;
    disabled: boolean;
    onClick: Function;
    children: React.ReactNode;
}

const Button: FC<IButton> = ({
    className,
    type,
    onClick,
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
