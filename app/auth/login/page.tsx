import React from 'react';
import Link from "next/link";
import Button from "@/app/components/Button";

const Login = () => {
    return (
        <section>
            <h1>Logowanie</h1>
            <form action="" method="post">
                <input type="email" name="email" required placeholder={'Email'}/>
                <input type="password" name="password" required placeholder={'Password'}/>
                <Button type="submit">Submit</Button>
            </form>
            <div>
                <p>Zapomniałeś hasła</p>
                <Link href="/auth/reset">kliknij tutaj aby je zresetować</Link>
                <p>Nowy użytkownik?</p>
                <Link href="/auth/register">Zarejestruj się</Link>
            </div>

        </section>
    );
};

export default Login;
