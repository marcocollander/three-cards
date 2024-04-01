import React from 'react';
import Button from "@/components/Button";

const Reset = () => {
    return (
        <main>
            <section>
                <h1>Zresetuj swoje hasło</h1>
                <form action="">
                    <input type="email" placeholder="Email" />
                    <Button type={'submit'}>Zresetuj swoje hasło</Button>
                </form>
            </section>

        </main>
    );
};

export default Reset;
