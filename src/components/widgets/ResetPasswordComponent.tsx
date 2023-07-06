import Link from 'next/link';
import React from 'react'

type Props = {
    values: {email: string};
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ResetPasswordComponent = (props: Props) => {

    const { values, onChange } = props;

    return (
        <React.Fragment>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-between items-center rounded-2xl px-12 py-8 shadow-lg w-1/3">
                    <h1 className="font-bold text-black text-lg md:text-2xl lg:text-4xl dark:text-white capitalize tracking-widest">
                        Forgot your Password?
                    </h1>
                    <p className="text-center my-4 px-16 mb-10">
                        We understand, mistakes happen. Enter your email address and we&apos;ll send you a link to reset your password.
                    </p>
                    <form 
                        action="" 
                        className="w-full px-12"
                    >
                        <div className="flex flex-col space-y-4 justify-center items-center">
                            <input 
                                type="email"
                                name='email'
                                placeholder='johndoe@email.com'
                                value={values.email}
                                onChange={onChange}
                                className="border border-gray-200 w-full rounded-full px-4 py-2 focus:outline-none focus:border-gray-400"
                            />                     
                        </div>
                        <div className="flex w-full pt-8">
                            <button className='flex w-full flex-row justify-center items-center bg-gold hover:bg-opacity-80 rounded-full px-10 py-2 text-black font-normal tracking-wider text-xl space-x-2 mr-auto'>
                                Reset Password
                            </button>
                        </div>
                        <div className="flex w-full">
                            <Link href='/auth'>
                                <a className="flex w-full justify-center items-center text-gray-500 hover:text-gray-700 text-sm font-normal tracking-wider mt-4">
                                    Back to login
                                </a>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ResetPasswordComponent
