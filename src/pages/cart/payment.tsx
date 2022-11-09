import { MainLayout } from '@components/common/layout';
import { Cart, DeliveryTruck, DHLIcon, MasterCardIcon, PaymentIcon } from '@components/icons';
import React from 'react';

const ShippingAndPayment = () => {
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

                <div className="flex flex-col py-12 px-12">
                    <div className="flex flex-row justify-center space-x-24 items-start">
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
                                <div className="relative top-0 flex flex-col space-y-6 justify-between items-center bg-white border border-gold shadow-lg py-6 px-4 rounded-2xl">
                                    <DHLIcon className="text-gold" />
                                    <h1 className="font-bold text-gray-900 text-sm md:textlg lg:text-xl">
                                        $12.23
                                    </h1>
                                    <p className="text-gray-400">
                                        cash on delivery
                                    </p>
                                    <div className="absolute -bottom-4 shadow-lg bg-gold px-4 py-1 rounded-full">
                                        <p className="">
                                            change
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
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
                        </div>
                    </div>

                    <div className="">
                        
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}

ShippingAndPayment.Layout = MainLayout;

export default ShippingAndPayment;
