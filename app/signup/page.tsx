import SignUpForm from '@/components/SignUpForm';

export default function SignUp() {
    return (
        <div className='mx-auto mt-10 w-full max-w-[500px] p-4 bg-green-500 text-white'>
            <div className='space-y-2 text-center mb-5'>
                <h1 className='mb-3 text-3xl font-bold tracking-wide'>
                    Rejestracja
                </h1>
            </div>
            <SignUpForm />
        </div>
    );
}
