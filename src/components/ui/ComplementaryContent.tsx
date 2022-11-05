import React from 'react';
import Image from 'next/image';
import { AdultBlackCloth, BeachBlackShirt, PersonSaleOne } from '@assets/static/images';

const ComplementaryContent = () => {
    return (
        <React.Fragment>
            <div className="flex flex-grow justify-center items-center w-full py-8 px-8 space-x-8">
                <div className="h-full relative top-0 right-0 left-0">
                    <div className="absolute top-0 right-0 left-0 w-full h-full z-20 bg-black bg-opacity-10"></div>
                    <div className="absolute bottom-10 left-10 z-20">
                        <div className="flex flex-col justify-start items-start">
                            <h1 className="text-4xl font-bold text-white">
                                New Arivals <br /> are now in
                            </h1>
                            <button className='mt-10 mb-10 bg-white text-gray-700 px-4 py-2 rounded-full text-center hover:bg-transparent border border-transparent hover:border-white hover:text-gray-50 font-bold text-sm uppercase'>
                                show collection
                            </button>
                        </div>
                    </div>
                    <Image 
                        src={AdultBlackCloth}
                        alt="Adult Black Cloth"
                        className='object-cover w-full h-full'
                    />
                </div>
                <div className="h-full relative top-0 right-0 left-0">
                    <div className="absolute top-0 right-0 left-0 w-full h-full z-20 bg-black bg-opacity-10"></div>
                    <div className="absolute bottom-10 left-4 z-20">
                        <div className="flex flex-col justify-start items-start">
                            <h1 className="text-2xl font-bold text-white">
                                Basic T-Shirts <br /> $29.99
                            </h1>
                            <button className='mt-10 mb-10 bg-white text-gray-700 px-4 py-2 rounded-full text-center hover:bg-transparent border border-transparent hover:border-white hover:text-gray-50 font-bold uppercase text-sm'>
                                more details
                            </button>
                        </div>
                    </div>
                    <Image 
                        src={BeachBlackShirt}
                        alt="Beach Black Shirt"
                        className='object-cover w-full h-full'
                    />
                </div>
                <div className="h-full relative top-0 right-0 left-0">
                    <div className="absolute top-0 right-0 left-0 w-full h-full z-20 bg-black bg-opacity-50"></div>
                    <div className="absolute bottom-10 left-4 z-20">
                        <div className="flex flex-col justify-start items-start">
                            <div className="flex flex-col justify-start items-start space-y-2">
                                <span className="text-sm bg-red rounded-full px-2 py-1 font-bold text-white">
                                    -50%
                                </span>
                            <h1 className="text-3xl font-bold text-white">
                                Sale this <br /> Summer
                            </h1>
                            </div>
                            <button className='mt-10 mb-10 bg-white text-gray-700 px-4 py-2 rounded-full text-center hover:bg-transparent border border-transparent hover:border-white hover:text-gray-50 font-bold text-sm uppercase'>
                                view all
                            </button>
                        </div>
                    </div>
                    <Image 
                        src={PersonSaleOne}
                        alt="Person One Sale"
                        className='object-cover w-full h-full'
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default ComplementaryContent;
