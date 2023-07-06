import { PersonOne } from '@assets/static/images';
import { MainLayout } from '@components/common/layout';
import { 
    ArrowLeft,
    Cart, 
    DeliveryTruck, 
    DHLIcon,
    MasterCardIcon, 
    PaymentIcon 
} from '@components/icons';
import VisaIcon from '@components/icons/VisaIcon';
import { CartItem } from '@components/widgets';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const ShippingAndPayment = () => {

    const router = useRouter();

    return (
        <React.Fragment>
            <div className="pt-28"></div>
            <div className="">
                <div className="px-32 flex flex-row justify-between items-center">
                    <h2 className="font-bold text-lg md:text-xl lg:text-2xl capitalize">
                        Summary
                    </h2>
                    <div className="flex flex-row justify-center items-center space-x-1">
                        <div className="rounded-full bg-white border border-gold p-2">
                            <Cart 
                                className="w-4 h-4 text-gray-400"
                            />
                        </div>
                        <div className="bg-gray-300 w-10 h-[1px]"></div>
                        <div className="rounded-full bg-transparent border border-gold p-2">
                            <DeliveryTruck 
                                className="w-4 h-4 text-gray-400"
                            />
                        </div>
                        <div className="bg-gray-300 w-10 h-[1px]"></div>
                        <div className="rounded-full bg-gold p-2">
                            <PaymentIcon 
                                className="w-4 h-4 text-white"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-between py-12 px-12">
                    <div className="flex flex-row justify-around space-x-24 items-start">
                        <div className="flex">
                            <div className="flex flex-col space-y-4">
                                <p className="capitalize font-bold mb-4">
                                    Payment Method
                                </p>
                                <div className="flex flex-col space-y-2">
                                    <div className="flex flex-row justify-between items-center space-x-2">
                                        <div className="bg-white border border-gray-200 rounded-full px-8 py-1">
                                            <MasterCardIcon />
                                        </div>
                                        <div className="relative top-0">
                                            <div className="w-full h-full bg-white border border-gray-200 rounded-full px-8 py-1">
                                                <VisaIcon />
                                            </div>
                                            <div className="absolute top-0 right-0 left-0 w-full h-full bg-gray-100 rounded-full bg-opacity-60"></div>
                                        </div>
                                        <div className="relative top-0">
                                            <div className="w-full h-full bg-white border border-gray-200 rounded-full px-8 py-1">
                                                <MasterCardIcon />
                                            </div>
                                            <div className="absolute top-0 right-0 left-0 w-full h-full bg-gray-100 rounded-full bg-opacity-60"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between items-center space-x-2">
                                        <div className="relative top-0">
                                            <div className="w-full h-full bg-white border border-gray-200 rounded-full px-8 py-1">
                                                <MasterCardIcon />
                                            </div>
                                            <div className="absolute top-0 right-0 left-0 w-full h-full bg-gray-100 rounded-full bg-opacity-60"></div>
                                        </div>
                                        <div className="relative top-0">
                                            <div className="w-full h-full bg-white border border-gray-200 rounded-full px-8 py-1">
                                                <MasterCardIcon />
                                            </div>
                                            <div className="absolute top-0 right-0 left-0 w-full h-full bg-gray-100 rounded-full bg-opacity-60"></div>
                                        </div>
                                        <div className="relative top-0">
                                            <div className="w-full h-full bg-white border border-gray-200 rounded-full px-8 py-1">
                                                <MasterCardIcon />
                                            </div>
                                            <div className="absolute top-0 right-0 left-0 w-full h-full bg-gray-100 rounded-full bg-opacity-60"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center space-y-6">
                            <p className="capitalize font-bold">
                                Delivery method
                            </p>
                            <div className="flex">
                                <div className="relative top-0 flex flex-col space-y-6 justify-between items-center bg-white border border-gold shadow-lg py-10 px-4 rounded-2xl">
                                    <DHLIcon className="text-gold" />
                                    <h1 className="font-bold text-gray-900 text-sm md:textlg lg:text-xl">
                                        $12.23
                                    </h1>
                                    <p className="text-gray-400">
                                        cash on delivery
                                    </p>
                                    <div className="absolute -bottom-4 shadow-lg bg-gold px-4 py-1 rounded-full">
                                        <Link href='/cart/delivery'>
                                            <a className="">
                                                change
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-center">
                            <div className="flex-col justify-center items-start">
                                <h3 className="capitalize font-bold mb-4">
                                    Delivery Address
                                </h3>
                                <div className="">
                                    <p className="text-gray-400">
                                        1234 Main Street
                                    </p>
                                    <p className="text-gray-400">
                                        New York, NY 10001
                                    </p>
                                    <p className="text-gray-400">
                                        United States
                                    </p>
                                    <p className="text-gray-400">
                                        +233 33 00 00 00
                                    </p>
                                    <p className="text-gray-400">
                                        johndoe@email.com
                                    </p>
                                </div>
                            </div>
                            <div className="mt-10">
                                <Link href='/cart/delivery'>
                                    <a className='border border-gray-200 text-gray-300 hover:bg-gold hover:border-none hover:text-white hover:font-bold text-center rounded-full capitalize py-2 px-6'>
                                        change address
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 w-full">
                        <div className="mb-8 w-full">
                            <h2 className="font-bold text-sm md:text-lg lg:text-xl capitalize">
                                your cart
                            </h2>
                        </div>
                        <div className="grid grid-cols-4 w-full">
                            <div className="col-span-3 w-full flex flex-row items-center justify-between">
                                <div className="grid grid-cols-1 w-full items-center">
                                    <CartItem 
                                        src={PersonOne}
                                        productName="T-Shirt summer vibe"
                                        productCode='#2SD347SG'
                                        color="White"
                                        size='XL'
                                        quantity={1}
                                        price={188.44}
                                        onDelete={() => console.log('delete')}
                                        increaseItemQuantity={() => console.log('increase')}
                                        decreaseItemQuantity={() => console.log('decrease')}
                                    />
                                    <CartItem 
                                        src={PersonOne}
                                        productName="T-Shirt summer vibe"
                                        productCode='#2SD347SG'
                                        color="White"
                                        size='XL'
                                        quantity={1}
                                        price={188.44}
                                        onDelete={() => console.log('delete')}
                                        increaseItemQuantity={() => console.log('increase')}
                                        decreaseItemQuantity={() => console.log('decrease')}
                                    />
                                </div>
                            </div>
                            <div className="col-span-1 flex w-full flex-row justify-center items-center">
                                <button className="bg-gray-100 py-4 px-10 rounded-full flex flex-row justify-center items-center space-x-6">
                                    <span>total cost</span>
                                    <span className="font-bold">$159.89</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between items-center mt-10">
                        <div className="">
                            <button onClick={() => { 
                                router.back();
                            }} className="flex flex-row justify-center space-x-4">
                                <ArrowLeft />
                                <p className='font-bold'>
                                    Back
                                </p>
                            </button>
                        </div>
                        <div className="flex justify-center items-center space-x-4">
                            <DeliveryTruck />
                            <p className="flex space-x-2">
                                <span>Your are</span>
                                <span className="font-bold">
                                    $30.02
                                </span> 
                                <span>
                                    missing for free shipping
                                </span>
                            </p>
                        </div>
                        <div className="flex justify-center items-center space-x-4">
                            <Link href='/products'>
                                <a className='bg-transparent border hover:bg-gray-100 border-gray-300 font-bold rounded-full px-6 py-2'>
                                    continue shopping
                                </a>
                            </Link>
                            <button className='bg-gold px-6 py-2 rounded-full font-bold hover:bg-yellow-500'>
                                proceed to payment
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}

ShippingAndPayment.Layout = MainLayout;

export default ShippingAndPayment;
