import React from 'react';
import Image from 'next/image';

type Props = {
    src: any;
    alt?: string;
    title: string;
    description: string;
}

const HeroBottomItem = (props: Props) => {
    const {src, alt, title, description } = props;
    return (
        <React.Fragment>
            <div className="flex items-center py-8 px-4 space-x-4 cursor-pointer">
                <div className="bg-gold flex justify-center items-center bg-opacity-10 px-6 py-4 rounded-md">
                    <Image 
                        src={src}
                        alt={alt ?? "Icon"}
                    />
                </div>
                <div className="">
                    <p className="text-sm font-bold md:text-lg text-gray-700">
                        {title}
                    </p>
                    <p className="text-sm font-semibold text-gray-500">
                        {description}
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeroBottomItem;
