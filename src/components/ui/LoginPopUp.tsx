import { LoginComponent } from '@components/widgets';
import React from 'react';

const initialValues = {
    email: '',
    password: '',
};

const LoginPopUp = () => {

    const [values, setValues] = React.useState(initialValues);
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    // handle change value
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    return (
        <React.Fragment>
            <div className="bg-white">
                <LoginComponent
                    values={values}
                    handleChange={handleChange}
                    passwordVisible={passwordVisible}
                    setPasswordVisible={setPasswordVisible}
                />
            </div>
        </React.Fragment>
    )
}

export default LoginPopUp;

