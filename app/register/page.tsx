import React from 'react';
import Button from "@/components/Button";

const Register = () => {
    return (
        <section>
            <h1>Rejestracja</h1>
            <form action="">
                <input type="text" name="username" placeholder="Username" required/>
                <input type="email" name="email" placeholder="Email" required/>
                <input type="password" name="password" placeholder="Hasło" required/>
                <input type="password" name="password" placeholder="Powtórz hasło" required/>
                <Button>Zarejestruj</Button>
            </form>
        </section>
    );
};

export default Register;
