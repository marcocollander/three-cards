import Picture from "@/app/components/Picture";
import Button from "@/app/components/Button";

const Main = () => {
    return (
        <main className={'my-20'}>
            <section className={'sm:w-full md:w-1/4 lg:w-1/6 xl:w-1/12 mx-auto'}>
                <div className={'flex justify-center h-98'}>
                    <Picture photoUrl={'/dama-karo.jpg'} className={'my-5 ml-5'}/>
                    <Picture photoUrl={'/dama-pik.jpg'} className={'my-5 ml-5 mr-5'}/>
                    <Picture photoUrl={'/dama-kier.jpg'} className={'my-5 mr-5'}/>
                </div>
                <div className={'flex justify-center'}>
                    <Button>Start</Button>
                    <Button>Reset</Button>
                </div>
                <p>
                    Witaj, wyniki tylko<a href="/auth/login">zalogowanych</a> użytkowników zostaną zapamiętane
                </p>
            </section>
            <section className="container">
                <form>
                    <div>
                        <label htmlFor="numberOfHits">Ilość trafień</label>
                        <input type="number" name="numberOfHits" id="numberOfHits"/>
                    </div>
                    <div>
                        <label htmlFor="numberOfAttempts">Ilość trafień</label>
                        <input type="number" name="numberOfAttempts" id="numberOfAttempts"/>
                    </div>
                    <div>
                        <label htmlFor="hitPercentage">Ilość trafień</label>
                        <input type="number" name="hitPercentage" id="hitPercentage"/>
                    </div>

                </form>
                <div>
                    <p>Hit message</p>
                </div>
            </section>
        </main>
    );
};

export default Main;
