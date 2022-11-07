import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { increaseItemQuantity } from '../../lib/provider/features/reducers/BasketReducer';

type Props = {
    src: StaticImageData | any;
    alt?: string;
    width?: number;
    height?: number;
    productName: string;
    productCode: string;
    color: string;
    size: string;
    quantity: number;
    price: number;
    onDelete: (id: string) => void;
    increaseItemQuantity: (id: string) => void;
    decreaseItemQuantity: (id: string) => void;
}

function CartItem(props: Props) {
    const { 
        src, 
        alt, 
        width, 
        height,
        productCode,
        productName,
        color,
        size,
        quantity,
        price,
        onDelete,
        increaseItemQuantity,
        decreaseItemQuantity
    } = props;

    return (
        <React.Fragment>
            <div className="grid grid-cols-7 py-4 hover:bg-gray-100 cursor-default px-4 items-center">
                    <div className="col-span-2">
                        <div className="flex flex-row justify-start space-x-4 items-center">
                            <div className="flex justify-center items-center">
                                <Image
                                    src={src}
                                    height={ height ?? 50}
                                    width={ width ?? 50}
                                    alt={alt ?? "Product Thumbnail"}
                                    className='rounded-full object-cover cursor-pointer'
                                />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="font-bold capitalize">
                                    {productName}
                                </h2>
                                <h3 className="text-gray-300">
                                    {productCode}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <p className="">
                            {color}
                        </p>
                    </div>
                    <div className="col-span-1">
                        <p className="">
                            {size}
                        </p>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-transparent border-2 border-gray-300 rounded-full w-28 flex flex-row justify-center items-center">
                            <div className="flex flex-row justify-between items-center space-x-4">
                                <button onClick={() => decreaseItemQuantity("id")} className="flex justify-center items-center mb-1">
                                    <p className="font-extrabold text-lg md:text-xl lg:text-2xl">
                                        -
                                    </p>
                                </button>
                                <p className="text-gray-600">
                                    {quantity}
                                </p>
                                <button onClick={() => increaseItemQuantity("id")} className="flex justify-center items-center mb-1">
                                    <p className="font-extrabold text-lg md:text-xl lg:text-2xl">
                                        +
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <p className="font-bold">
                            $ {price}
                        </p>
                    </div>
                    <div className="col-span-1">
                        <button onClick={() => onDelete("id")} className='text-lg md:text-xl lg:text-xl font-bold'>
                            x
                        </button>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default CartItem
