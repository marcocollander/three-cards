'use client';

import {FC, useState} from "react";
import Button from "@/components/Button";

const ResultsForm: FC = () => {
    const [show, setShow] = useState(false)
    const handleResults = () => {
        setShow(prevState => !prevState)
    }
    return (
        <>
            <div className='flex justify-center flex-col items-center'>
                <Button onClick={handleResults}>Pokaż wyniki</Button>
            </div>
            {
                show &&
                <section className="my-5 flex justify-center flex-col items-center">
                    <form className={"lg:w-1/2 flex-col flex  items-center text-xl lg:text-2xl"}>
                        <div className={'flex flex-col lg:w-1/2 items-center'}>
                            <label className={'mb-2'} htmlFor="numberOfHits">Ilość trafień: </label>
                            <input type="number" name="numberOfHits" id="numberOfHits"/>
                        </div>
                        <div className={'m-3 flex flex-col items-center lg:w-1/2'}>
                            <label className={'mb-2'} htmlFor="numberOfAttempts">Ilość prób: </label>
                            <input className={''} type="number" name="numberOfAttempts" id="numberOfAttempts"/>
                        </div>
                        <div className={'flex flex-col items-center lg:w-1/2'}>
                            <label className={'mb-2'} htmlFor="hitPercentage">Procent trafień: </label>
                            <input type="number" name="hitPercentage" id="hitPercentage"/>
                        </div>
                        <Button type={'submit'}>Wynik wyślij na serwer</Button>

                    </form>
                    <div>
                        <p>Hit message</p>
                    </div>
                </section>
            }</>
    )
}

export default ResultsForm;