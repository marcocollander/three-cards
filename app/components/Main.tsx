import Picture from "@/app/components/Picture";
import Button from "@/app/components/Button";
import Link from "next/link";

const Main = () => {
    return (
        <main className={'my-8'}>
            <section className={'mx-auto flex flex-col items-center'}>
                <h2 className={'text-xl text-white'}>Witaj, wyniki tylko</h2>
                <Link className={'text-white font-bold'} href="/auth/login">zalogowanych</Link>
                <p className={'text-white'}>użytkowników zostaną zapamiętane</p>
            </section>
            <section className={'mt-10 sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/6 mx-auto'}>
                <div className={'flex justify-center h-98'}>
                    <Picture photoUrl={'/dama-karo.png'} className={'my-5 ml-5'}/>
                    <Picture photoUrl={'/dama-pik.png'} className={'my-5 ml-5 mr-5'}/>
                    <Picture photoUrl={'/dama-kier.png'} className={'my-5 mr-5'}/>
                </div>
                <div className={'flex justify-center'}>
                    <Button>Start</Button>
                    <Button>Reset</Button>
                </div>
            </section>

            <section className="my-5 flex justify-center flex-col items-center">
                <form className={"lg:w-1/2 flex-col flex  items-center"}>
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
        </main>
    );
};

export default Main;
