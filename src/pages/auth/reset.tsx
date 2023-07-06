import { MainLayout } from '@components/common/layout';
import { ArrowLeft } from '@components/icons';
import { ResetPasswordComponent } from '@components/widgets';
import { useRouter } from 'next/router';
import React from 'react'

const initialValues = {
    email: '',
};

const ResetPassword = () => {

    const [values, setValues] = React.useState(initialValues);
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
            <ResetPasswordComponent 
                values={values}
                onChange={handleChange}
            />
        </React.Fragment>
    );
}

ResetPassword.Layout = MainLayout;

export default ResetPassword;
