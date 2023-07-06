import { PersonOne } from '@assets/static/images';
import { MainLayout } from '@components/common/layout';
import { ArrowLeft, Cart, DeliveryTruck, PaymentIcon } from '@components/icons';
import { CartItem } from '@components/widgets';
import ShoppingCartTitle from '@components/widgets/ShoppingCartTitle';
import Link from 'next/link';
import React from 'react';

const CartPage = () => {
    return (
        <React.Fragment>
            <div className="pt-28"></div>
            <div className="h-full">
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
                            <div className="bg-gray-300 w-10 h-[1px]"></div>
                            <div className="rounded-full bg-transparent p-2">
                                <PaymentIcon 
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
                                <Link href='/cart/delivery'>
                                    <a className='bg-gold hover:bg-yellow-500 hover:bg-opacity-90 rounded-full px-10 py-2 uppercase font-bold'>
                                        Checkout
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
};

CartPage.Layout = MainLayout;

export default CartPage;