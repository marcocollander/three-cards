import { FC } from 'react';

const Footer: FC = () => {
    return (
        <footer
            className={
                'flex flex-col text-white items-center bg-green-900 py-2 fixed w-full bottom-0 text-xs md:text-lg'
            }
        >
            <p>The game of three cards</p>
            <p>Copyright &copy; 2024 Free Coder.</p>
            <p>All rights reserved.</p>
        </footer>
    );
};

export default Footer;
