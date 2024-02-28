import React from 'react';

const Button = ({className='ml-5 my-10 bg-emerald-700 px-4 py-2 text-md tracking-widest text-white rounded-xl', children}:any) => {
    return (
        <button className={className}>
            {children}
        </button>
    );
};

export default Button;
