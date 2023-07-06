import React from 'react';
import Image from 'next/image';

type Props = {
    icon: any;
    alt?: string;
    title: string;
    description: string;
    isBlack?: boolean;
}

const WhyChooseUsItem = (props:Props) => {
    const {icon, alt, title, description, isBlack } = props;
    return (
        <React.Fragment>
            <div className="flex flex-col space-y-4 justify-start items-start px-4 py-2">
                        {
                            isBlack ? <div className="bg-black flex justify-center items-center bg-opacity-20 px-6 py-4 rounded-md">
                                <Image 
                                    src={icon}
                                    alt={alt ?? "Fast Delivery"}
                                    className='object-cover h-full w-full'
                                />
                            </div> :
                            <div className="bg-gold flex justify-center items-center bg-opacity-20 px-6 py-4 rounded-md">
                                <Image 
                                    src={icon}
                                    alt={alt ?? "Fast Delivery"}
                                    className='object-cover h-full w-full'
                                />
                            </div>
                        }
                        <h1 className='text-black font-bold text-lg md:text-xl lg:text-2xl'>
                            {title}
                        </h1>
                        <p className='text-gray-600 md:text-lg lg:text-xl text-justify'>
                            {description}
                        </p>
                    </div>
        </React.Fragment>
    );
}

export default WhyChooseUsItem;
