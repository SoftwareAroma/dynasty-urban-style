import { MainLayout } from '@components/common/layout';
import { ArrowLeft, EyeSlash, FaceBook, GMail } from '@components/icons';
import { LoginComponent } from '@components/widgets';
import Link from 'next/link';
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
            <div className="py-16"></div>
            <LoginComponent
                values={values}
                handleChange={handleChange}
                passwordVisible={passwordVisible}
                setPasswordVisible={setPasswordVisible}
            />
        </React.Fragment>
    );
};

LoginPage.Layout = MainLayout

export default LoginPage;