import { EyeIcon, EyeSlash, FaceBook, GMail } from '@components/icons';
import Link from 'next/link';
import React from 'react';

type Props = {
    values: {email: string, password:string};
    passwordVisible: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginComponent = (props:Props) => {

    const { values, passwordVisible, handleChange, setPasswordVisible } = props;

    return (
        <React.Fragment>
            <div className="w-full flex flex-col justify-center items-center">
                <div className="flex flex-col justify-between items-center rounded-2xl px-12 py-8 shadow-lg w-1/3">
                    <h1 className="font-extrabold text-black text-lg md:text-2xl lg:text-4xl dark:text-white uppercase tracking-widest">
                        log in
                    </h1>
                    <p className="text-justify my-4 px-16 mb-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, assumenda.
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
                                onChange={handleChange}
                                className="border border-gray-200 w-full rounded-full px-4 py-2 focus:outline-none focus:border-gray-400"
                            />
                            <div className="flex relative top-0 right-0 left-0 w-full">
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    name='password'
                                    placeholder='Password'
                                    value={values.password}
                                    onChange={handleChange}
                                    className="border border-gray-200 w-full rounded-full px-4 py-2 focus:outline-none focus:border-gray-400"
                                />
                                <div className="absolute cursor-pointer z-10 h-full flex flex-col justify-center items-center right-6">
                                    {
                                        !passwordVisible ? 
                                        <EyeSlash
                                            className="text-gray-400 w-6 h-6"
                                            onClick={() => setPasswordVisible(!passwordVisible)}
                                        /> : 
                                        <EyeIcon
                                            className="text-gray-400 w-6 h-6" 
                                            onClick={() => setPasswordVisible(!passwordVisible)} 
                                        />
                                    }
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-center w-full px-4 py-2">
                                <div className="flex">
                                    <input
                                        type="checkbox"
                                        className="cursor-pointer"
                                    />
                                    <p className="text-gray-700 ml-2">
                                        Remember me
                                    </p>
                                </div>
                                <div className="">
                                    <Link href="/auth/reset">
                                        <a className='text-gray-400'>
                                            forgot passwrord?
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex w-full flex-grow flex-row justify-center space-x-10 pb-8">
                                <button className='flex flex-row justify-center items-center bg-kblue hover:bg-blue-500 rounded-full px-10 py-2 text-white text-xl space-x-2 mr-auto'>
                                    <FaceBook
                                        className='w-6 h-6'
                                    />
                                    <p>
                                        facebook
                                    </p>
                                </button>
                                <button className='flex flex-row justify-center items-center bg-tranparent border border-dim-red rounded-full px-10 py-2 text-dim-red text-xl space-x-2'>
                                    <GMail
                                        className='w-6 h-6'
                                    />
                                    <p>
                                        Google
                                    </p>
                                </button>
                            </div>
                            <div className="flex w-full">
                                <button className='flex w-full flex-row justify-center items-center bg-gold hover:bg-opacity-80 rounded-full px-10 py-2 text-black font-normal tracking-wider text-xl space-x-2 mr-auto'>
                                    login
                                </button>
                            </div>
                            <div className="flex w-full space-x-4 flex-row justify-center items-center cursor-pointer">
                                <p className="">
                                    not a member yet?
                                </p>
                                <Link href="/auth/register">
                                    <a className='font-bold ml-2 capitalize'>
                                        Sign up
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginComponent
