import { MainLayout } from '@components/common/layout';
import { ArrowLeft, EyeSlash } from '@components/icons';
import { useRouter } from 'next/router';
import React from 'react';

const initialValues = {
    email: '',
    password: '',
};

const LoginPage = () => {
    const [values, setValues] = React.useState(initialValues);
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const router = useRouter();

    // handle change value
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    return (
        <React.Fragment>
            <div className="py-20"></div>
            <div onClick={() => {router.replace('/products')}} className="flex justify-start items-start px-24 space-x-4 cursor-pointer">
                <ArrowLeft />
                <p className="text-gray-700 font-bold">
                    Back to store
                </p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-between items-center rounded-lg px-12 py-8 shadow-lg w-[600px]">
                    <h1 className="font-extrabold text-gray-900 dark:text-white uppercase tracking-widest">
                        log in
                    </h1>
                    <p className="text-justify my-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, assumenda.
                    </p>
                    <form 
                        action="" 
                        className="w-full"
                    >
                        <div className="flex flex-col space-y-4 justify-center items-center">
                            <input 
                                type="text"
                                placeholder='Email'
                                // value={values.email}
                                // onChange={(e) => handleChange(e)}
                                className="border border-gray-200 w-full rounded-full px-4 py-2 focus:outline-none focus:border-gray-400"
                            />
                            <div className="flex relative top-0 right-0 left-0 w-full">
                                <input
                                    type="text"
                                    placeholder='Password'
                                    // value={values.password}
                                    // onChange={handleChange}
                                    className="border border-gray-200 w-full rounded-full px-4 py-2 focus:outline-none focus:border-gray-400"
                                />
                                <div className="absolute cursor-pointer z-10 top-[35%] right-6">
                                    <EyeSlash />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

LoginPage.Layout = MainLayout

export default LoginPage;