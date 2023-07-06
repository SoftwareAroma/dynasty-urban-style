import { Bag, Cart, EyeIcon, Heart, Star } from '@components/icons';
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
    addToCart?: () => void;
    addToWishlist?: () => void;
}

const ProductCard = (props: Props) => {

    const [hover, setHover] = React.useState(false);

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
        addToCart,
        addToWishlist
    } = props;

    // calculate the original price based on the discount
    const discountPrice = isDiscount ? price + (price * (Number(discount?.replace('%', '')) / 100)) : price;

    // on mouse enter
    const onMouseEnter = () => {
        setHover(true);
    }

    // on mouse leave
    const onMouseLeave = () => {
        setHover(false);
    }



    return (
        <React.Fragment>
            <div 
                onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave} 
                className="bg-white border rounded-lg border-gray-100 hover:scale-105 hover:shadow-xl duration-500 relative"
            >
                    {
                        hover &&
                        <div className="absolute w-full h-full flex flex-col justify-center items-center bg-transparent rounded-full z-20 text-gray-100 px-4 p-1 space-y-4 transition-all duration-300 delay-150">
                            <div className="bg-white cursor-pointer px-8 space-x-4 py-2 rounded-full flex flex-row justify-items-center justify-center items-center">
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
                            <div className="flex flex-row space-x-2">
                                <button 
                                    onClick={addToCart} 
                                    className="bg-white hover:bg-gold w-10 h-10 p-1 rounded-full flex justify-center items-center shadow-md"
                                >
                                    <Cart className="text-black" />
                                </button>
                                <button 
                                    onClick={addToWishlist} 
                                    className="bg-white hover:bg-gold w-10 h-10 p-1 rounded-full flex justify-center items-center shadow-md"
                                >
                                    <Heart className="text-black" />
                                </button>
                                <button 
                                    className="bg-white hover:bg-gold w-10 h-10 p-1 rounded-full flex justify-center items-center shadow-md"
                                >
                                    <EyeIcon className="text-black" />
                                </button>
                            </div>
                        </div>
                    }
                    {
                        isDiscount && 
                            <div className="absolute top-6 left-4 bg-red-500 rounded-full z-20 text-gray-100 px-4 p-1">
                                <p>
                                    {discount}
                                </p>
                            </div>
                    }
                    <div className="absolute top-4 right-4 bg-transparent rounded-full z-20 text-gray-100 px-4 p-1">
                        <button 
                            onClick={addToWishlist} 
                            className="flex flex-row justify-center items-center"
                        >
                            <Heart 
                                className="text-black hover:text-white bg-white hover:shadow-md hover:bg-kpink rounded-full p-2 h-10 w-10" 
                            />
                        </button>
                    </div>
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
                                        <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 cursor-auto my-3">
                                            ${discountPrice}
                                        </p> 
                                        : 
                                        <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 cursor-auto my-3">
                                            ${price}
                                        </p>
                                }
                                {
                                    isDiscount && 
                                    <del className='bg-gray-200 px-6 text-red-600 rounded-full text-center items-center'>
                                        <p className="text-sm md:text-lg text-red-400 cursor-auto">
                                            ${price}
                                        </p>
                                    </del>
                                }
                            </div>
                            <div className="ml-auto w-14 h-14 flex justify-center items-center p-4 hover:bg-kpink rounded-full text-black hover:text-white cursor-pointer">
                                <button onClick={addToCart} >
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