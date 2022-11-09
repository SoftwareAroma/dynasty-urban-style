import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Cart, DeliveryTruck, DHLIcon, PaymentIcon } from '@components/icons';
import { MainLayout } from '@components/common/layout';
import LoginPopUp from '@components/ui/LoginPopUp';
import { DeliveryMethodCard, InputForm } from '@components/widgets';
import { useSelector } from 'react-redux';
import { useAppSelector } from '@lib/provider';


const countries = [
    { value: 'ghana', label: 'Ghana' },
    { value: 'nigeria', label: 'Nigeria' },
];

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
}

const paymentMethod = {
    "one": true,
    "two": false,
    "three": false,
    "four": false,
    "five": false,
    "six": false,
}


const DeliveryPage = () => {

    const [showLogin, setShowLogin] = React.useState(false);
    const [showRegister, setShowRegister] = React.useState(false);
    const [values, setValues] = React.useState(initialValues);

    const [payment, setPayment] = React.useState(paymentMethod);

    // change all to payment to false except the one that is clicked
    const handlePayment = (e: any) => {
        const { name } = e.target;
        setPayment({
            ...payment,
            [name]: true,
        })
    }

    // handle change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const user = useAppSelector((state) => state.user.user);

    const handleShowLogin = () => {
        setShowLogin(true);
        setShowRegister(false);
    }

    const handleShowRegister = () => {
        setShowRegister(true);
        setShowLogin(false);
    }

    return (
        <React.Fragment>
            <div className="pt-28"></div>
            <div className="">
                    <div className="px-12 flex flex-row justify-between items-center">
                        <h2 className="font-bold text-lg md:text-xl lg:text-2xl capitalize">
                            Address data and type of delivery
                        </h2>
                        <div className="flex flex-row justify-center items-center space-x-1">
                            <div className="rounded-full bg-white border border-gold p-2">
                                <Cart 
                                    className="w-4 h-4 text-gray-400"
                                />
                            </div>
                            <div className="bg-gray-300 w-10 h-[1px]"></div>
                            <div className="rounded-full bg-gold p-2">
                                <DeliveryTruck  
                                    className="w-4 h-4 text-white"
                                />
                            </div>
                            <div className="bg-gray-300 w-10 h-[1px]"></div>
                            <div className="rounded-full bg-transparent p-2">
                                <PaymentIcon 
                                    className="w-4 h-4 text-gray-300"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between space-x-8 w-full px-12 py-8 items-center">
                        <div className="w-1/2 flex flex-col justify-start items-start">
                            {
                                !user &&
                                    <div className="flex flex-row justify-start items-center space-x-4 py-4">
                                        <button onClick={handleShowLogin} className='bg-gold hover:bg-yellow-500 text-black font-bold uppercase rounded-full px-6 py-2'>
                                            log in
                                        </button>
                                        <a className='bg-transparent hover:bg-gray-200 border-2 border-gray-400 text-black font-bold uppercase rounded-full px-6 py-2'>
                                            Sign up
                                        </a>
                                    </div>
                            }
                            <div className="w-full mt-6 flex flex-col space-y-7 justify-start items-start">
                                <div className="w-full flex flex-row justify-start space-x-6">
                                    <InputForm
                                        value={values.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                        type="text"
                                        name="firstName"
                                        label="First Name"
                                    />
                                    <InputForm
                                        value={values.lastName}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                        type="text"
                                        name="lastName"
                                        label="Last Name"
                                    />
                                </div>
                                <div className="w-full flex flex-row justify-start space-x-6">
                                    <InputForm
                                        value={values.address}
                                        onChange={handleChange}
                                        placeholder="Address"
                                        type="text"
                                        name="address"
                                        label="Address"
                                    />
                                    <InputForm
                                        value={values.city}
                                        onChange={handleChange}
                                        placeholder="City"
                                        type="text"
                                        name="city"
                                        label="City"
                                    />
                                </div>
                                <div className="w-full flex flex-row justify-start space-x-6">
                                    <InputForm
                                        value={values.postalCode}
                                        onChange={handleChange}
                                        placeholder="Postal code/zip"
                                        type="text"
                                        name="postalCode"
                                        label="Postal Code / Zip"
                                    />
                                    <InputForm
                                        value={values.phoneNumber}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        type="text"
                                        name="phoneNumber"
                                        label="Phone Number"
                                    />
                                </div>
                                <div className="w-full flex flex-row justify-start space-x-6">
                                    <div className="flex flex-col w-full space-y-2">
                                        <label className='font-bold text-gray-600 capitalize' htmlFor="country">
                                            Country
                                        </label>
                                        <div className="h-10 px-4 rounded-full outline-none focus:outline-none w-full border border-gray-300">
                                            <select 
                                                name="country" 
                                                id="country"
                                                className='w-full h-full outline-none focus:outline-none'
                                            >
                                                {
                                                    countries.map((country, index) => (
                                                        <option 
                                                            key={index} 
                                                            value={country.value}
                                                        >
                                                            {country.label}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <InputForm
                                        value={values.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        label="Email"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="w-full flex flex-col">
                                <div className="flex flex-col justify-center items-center space-y-6">
                                    <div className="flex flex-row justify-between items-center space-x-8">
                                        <button onClick={() => {
                                            setPayment({
                                                "one": true,
                                                "two": false,
                                                "three": false,
                                                "four"  : false,
                                                "five"  : false,
                                                "six"  : false,
                                            });
                                        }}>
                                            <DeliveryMethodCard
                                                icon={<DHLIcon className="text-gold" />} 
                                                price={'$15.65'} 
                                                description={'Payment in advance'}
                                                isSelected={payment.one}
                                            />
                                        </button>
                                        <button onClick={() => {
                                            setPayment({
                                                "one": false,
                                                "two": true,
                                                "three": false,
                                                "four"  : false,
                                                "five"  : false,
                                                "six"  : false,
                                            });
                                        }}>
                                            <DeliveryMethodCard 
                                                icon={<DHLIcon className="text-gold" />} 
                                                price={'$15.65'} 
                                                description={'Payment in advance'} 
                                                isSelected={payment.two}
                                            />
                                        </button>
                                        <button onClick={() => {
                                            setPayment({
                                                "one": false,
                                                "two": false,
                                                "three": true,
                                                "four"  : false,
                                                "five"  : false,
                                                "six"  : false,
                                            });
                                        }}>
                                            <DeliveryMethodCard 
                                                icon={<DHLIcon className="text-gold" />} 
                                                price={'$15.65'} 
                                                description={'Payment in advance'} 
                                                isSelected={payment.three}
                                            />
                                        </button>
                                    </div>
                                    <div className="flex flex-row justify-between items-center space-x-8">
                                        <button onClick={() => {
                                            setPayment({
                                                "one": false,
                                                "two": false,
                                                "three": false,
                                                "four"  : true,
                                                "five"  : false,
                                                "six"  : false,
                                            });
                                        }}>
                                            <DeliveryMethodCard 
                                                icon={<DHLIcon className="text-gold" />} 
                                                price={'$15.65'} 
                                                description={'Payment in advance'} 
                                                isSelected={payment.four}
                                            />
                                        </button>
                                        <button onClick={() => {
                                            setPayment({
                                                "one": false,
                                                "two": false,
                                                "three": false,
                                                "four"  : false,
                                                "five"  : true,
                                                "six"  : false,
                                            });
                                        }}>
                                            <DeliveryMethodCard 
                                                icon={<DHLIcon className="text-gold" />} 
                                                price={'$15.65'} 
                                                description={'Payment in advance'} 
                                                isSelected={payment.five}
                                            />
                                        </button>
                                        <button onClick={() => {
                                            setPayment(paymentMethod);
                                            setPayment({
                                                "one": false,
                                                "two": false,
                                                "three": false,
                                                "four"  : false,
                                                "five"  : false,
                                                "six"  : true,
                                            });
                                        }}>
                                            <DeliveryMethodCard 
                                                icon={<DHLIcon className="text-gold" />} 
                                                price={'$15.65'} 
                                                description={'Payment in advance'} 
                                                isSelected={payment.six}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between items-center w-full px-14 mt-8">
                        <Link href='/cart'>
                            <a className="flex flex-row justify-center items-center space-x-2">
                                <ArrowLeft 
                                    className="w-4 h-4 "
                                />
                                <p className="">
                                    Go back
                                </p>
                            </a>
                        </Link>
                        <div className="flex flex-row justify-between items-center space-x-14">
                            <div className="flex flex-row justify-between items-center space-x-4">
                                <Link href='/products'>
                                    <a className='bg-transparent border-2 border-gray-400 hover:bg-opacity-90 rounded-full px-10 py-2 uppercase font-bold'>
                                        Continue Shopping
                                    </a>
                                </Link>
                                <Link href='/cart/payment'>
                                    <a className='bg-gold hover:bg-opacity-90 rounded-full px-10 py-2 uppercase font-bold'>
                                        Proceed to Payment
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

DeliveryPage.Layout = MainLayout

export default DeliveryPage;
