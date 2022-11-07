import { PersonOne } from '@assets/static/images';
import { MainLayout } from '@components/common/layout';
import { ArrowLeft, Cart, DeliveryTruck } from '@components/icons';
import { CartItem } from '@components/widgets';
import ShoppingCartTitle from '@components/widgets/ShoppingCartTitle';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CartPage = () => {

    const [checkout, setCheckout] = React.useState(false);

    // show ckout
    const showCheckout = () => {
        setCheckout(true);
    }

    // hide checkout
    const hideCheckout = () => {
        setCheckout(false);
    }

    return (
        <React.Fragment>
            <div className="pt-28"></div>
            {
                !checkout &&
                <div className="">
                    <div className="px-12 flex flex-row justify-between items-center">
                        <h2 className="font-bold text-lg md:text-xl lg:text-2xl capitalize">
                            Shopping Cart
                        </h2>
                        <div className="flex flex-row justify-center items-center space-x-1">
                            <div className="rounded-full bg-gold p-2">
                                <Cart 
                                    className="w-4 h-4 text-white"
                                />
                            </div>
                            <div className="bg-gray-300 w-10 h-[1px]"></div>
                            <div className="rounded-full bg-transparent p-2">
                                <DeliveryTruck 
                                    className="w-4 h-4 text-gray-300"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between px-14">
                        <ShoppingCartTitle />
                        <div className="pt-4"></div>
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
                            color="Black"
                            size='XXL'
                            quantity={1}
                            price={188.44}
                            onDelete={() => console.log('delete')}
                            increaseItemQuantity={() => console.log('increase')}
                            decreaseItemQuantity={() => console.log('decrease')}
                        />
                    </div>
                    <div className="flex flex-row justify-between items-center w-full px-14 mt-8">
                        <div className="flex flex-row justify-center items-center space-x-2">
                            <ArrowLeft 
                                className="w-4 h-4 "
                            />
                            <Link href="/products">
                                <a className="">
                                    continue shopping
                                </a>
                            </Link>
                        </div>
                        <div className="flex flex-row justify-between items-center space-x-14">
                            <div className="flex">
                                <input 
                                    type="text"
                                    className='bg-transparent border border-gray-300 rounded-full outline-none focus:outline-none w-72 h-10 px-4'
                                    placeholder='Promo code'
                                />
                            </div>
                            <div className="flex justify-center items-center space-x-3">
                                    <p className="">
                                        Total Cost :
                                    </p>
                                    <h1 className="font-bold">$ 123.65</h1>
                                </div>
                            <div className="flex flex-row justify-between items-center">
                                <button onClick={() => {
                                    showCheckout();
                                }} className='bg-gold hover:bg-opacity-90 rounded-full px-10 py-2 uppercase font-bold'>
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                checkout &&
                <div className="">
                    <div className="px-12 flex flex-row justify-between items-center">
                        <h2 className="font-bold text-lg md:text-xl lg:text-2xl capitalize">
                            Shipping and Payment
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
                        </div>
                    </div>
                    <div className="grid grid-cols-4 w-full px-12 py-8 items-center">
                        <div className="col-span-2 w-full">
                            <div className="flex flex-row justify-start items-center space-x-4">
                                <button className='bg-gold hover:bg-yellow-500 text-black font-bold uppercase rounded-full px-6 py-2'>
                                    log in
                                </button>
                                <button className='bg-transparent hover:bg-gray-200 border-2 border-gray-400 text-black font-bold uppercase rounded-full px-6 py-2'>
                                    log in
                                </button>
                            </div>
                            <div className="flex flex-col space-y-2 justify-start items-start">
                                <h2 className="mb-2 mt-6 font-bold uppercase">
                                    Shipping Information
                                </h2>
                                <div className="flex flex-row justify-start space-x-4">
                                    <input 
                                        type="text" 
                                        className="rounded-full px-4 outline-none focus:outline-none w-full py-2 border border-gray-300"
                                        placeholder='Email' 
                                    />
                                    <input 
                                        type="text" 
                                        className="rounded-full px-4 outline-none focus:outline-none w-full py-2 border border-gray-300"
                                        placeholder='Address' 
                                    />
                                </div>
                                <div className="flex flex-row justify-start space-x-4">
                                    <input 
                                        type="text" 
                                        className="rounded-full px-4 outline-none focus:outline-none w-full py-2 border border-gray-300"
                                        placeholder='First Name' 
                                    />
                                    <input 
                                        type="text" 
                                        className="rounded-full px-4 outline-none focus:outline-none w-full py-2 border border-gray-300"
                                        placeholder='City' 
                                    />
                                </div>
                                <div className="flex flex-row justify-start space-x-4">
                                    <input 
                                        type="text" 
                                        className="rounded-full px-4 outline-none focus:outline-none w-full py-2 border border-gray-300"
                                        placeholder='Last Name' 
                                    />
                                    <input 
                                        type="text" 
                                        className="rounded-full px-4 outline-none focus:outline-none w-full py-2 border border-gray-300"
                                        placeholder='Postal Code / Digital Address' 
                                    />
                                </div>
                                <div className="flex flex-row justify-start space-x-4">
                                    <input 
                                        type="text" 
                                        className="rounded-full px-4 outline-none focus:outline-none w-full py-2 border border-gray-300"
                                        placeholder='Phone Number' 
                                    />
                                    <input 
                                        type="text" 
                                        className="rounded-full px-4 outline-none focus:outline-none w-full py-2 border border-gray-300"
                                        placeholder='Ashanti Region' 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 w-full">
                            <div className="flex flex-col">
                                <h1 className='capitalize font-bold text-lg md:text-xl lg:text-xl'>
                                    Payment Method
                                </h1>
                            </div>
                        </div>
                        <div className="col-span-1 w-full">
                            <div className="flex flex-col">
                                <h1 className='capitalize font-bold text-lg md:text-xl lg:text-xl'>
                                    Your Cart
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between items-center w-full px-14 mt-8">
                        <button onClick={hideCheckout} className="flex flex-row justify-center items-center space-x-2">
                            <ArrowLeft 
                                className="w-4 h-4 "
                            />
                            <p className="">
                                Go back
                            </p>
                        </button>
                        <div className="flex flex-row justify-between items-center space-x-14">
                            <div className="flex flex-row justify-between items-center space-x-4">
                                <Link href='/products'>
                                    <a className='bg-transparent border-2 border-gray-400 hover:bg-opacity-90 rounded-full px-10 py-2 uppercase font-bold'>
                                        Continue Shopping
                                    </a>
                                </Link>
                                <button onClick={() => {console.log("checkout");
                                }} className='bg-gold hover:bg-opacity-90 rounded-full px-10 py-2 uppercase font-bold'>
                                    Proceed to Payment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    );
};

CartPage.Layout = MainLayout;

export default CartPage;