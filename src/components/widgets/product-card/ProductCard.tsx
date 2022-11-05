import { ProductOne } from '@assets/static/images';
import { Bag, Star } from '@components/icons';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
    image: StaticImageData;
    title: string;
    price: number;
    alt?: string;
    rating?: number;
    description?: string;
    brand?: string;
    color?: string;
    discount?: string;
    isDiscount?: boolean;
}

const ProductCard = (props: Props) => {
    const {
        image,
        title,
        price,
        alt,
        rating,
        description,
        brand,
        color,
        discount,
        isDiscount,
    } = props;

    // calculate the original price based on the discount
    const originalPrice = isDiscount ? price + (price * (Number(discount?.replace('%', '')) / 100)) : price;

    return (
        <React.Fragment>
            <div className="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500 relative">
                    { 
                        isDiscount && 
                            <div className="absolute top-6 left-4 bg-red rounded-full z-20 text-gray-100 px-2 p-1">
                                <p>
                                    {discount}
                                </p>
                            </div>
                    }
                    <Link href="/">
                        <a>
                            <Image 
                                src={image}
                                height={500}
                                width={550}
                                alt={alt ?? "Product image"} 
                                className="h-full w-full object-cover rounded-tr-md rounded-tl-md" 
                            />
                        </a>
                    </Link>
                    <div className="px-4 py-3 w-full">
                        <div className="flex flex-row justify-between items-center my-2">
                            <p className="text-gray-400 mr-3 uppercase text-xs md:text-lg lg:text-lg">
                                {brand}
                            </p>
                            <div className="flex flex-row justify-items-center justify-center items-center">
                                <div className="border border-pink rounded-full w-6 h-6 mx-1">
                                    <div className="border w-full h-full rounded-full bg-pink"></div>
                                </div>
                                <div className="border border-gold rounded-full w-6 h-6 mx-1">
                                    <div className="border w-full h-full rounded-full bg-gold"></div>
                                </div>
                                <div className="border border-purple-500 rounded-full w-6 h-6 mx-1">
                                    <div className="border w-full h-full rounded-full bg-purple-500"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 truncate block capitalize">
                                {title}
                            </p>
                            <div className="flex flex-row items-center">
                                {
                                    rating &&
                                        <React.Fragment>
                                            <p className="text-gray-400 text-sm md:text-lg lg:text-lg mr-1">
                                                {rating}
                                            </p>
                                            <Star className="text-gold" />
                                        </React.Fragment>
                                }
                            </div>
                        </div>
                        <div className="w-full flex flex-row justify-between items-center">
                            <div className="flex flex-row justify-center items-center space-x-4">
                                {
                                    isDiscount ?  
                                        <p className="text-lg md:text-xl lg:text-2xl font-semibold text-red cursor-auto my-3">
                                            ${price}
                                        </p> 
                                        : 
                                        <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 cursor-auto my-3">
                                            ${price}
                                        </p>
                                }
                                {
                                    isDiscount && 
                                    <del className='bg-gray-200 px-4'>
                                        <p className="text-sm md:text-lg text-gray-500 cursor-auto ml-2">
                                            ${originalPrice}
                                        </p>
                                    </del>
                                }
                            </div>
                            <div className="ml-auto w-14 h-14 flex justify-center items-center p-4 hover:bg-pink rounded-full text-black hover:text-white cursor-pointer">
                                <button>
                                    <Bag />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
}

export default ProductCard;