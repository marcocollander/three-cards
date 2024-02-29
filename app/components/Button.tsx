const classButton: string = 'border-white border-[1px] ml-5 my-10 bg-emerald-700 px-4 py-1 text-md tracking-[2px] text-white rounded-[7px]'

const Button = ({className = classButton, type='button', children}:any) => {
    return (
        <button className={className} type={type}>
            {children}
        </button>
    );
};

export default Button;
