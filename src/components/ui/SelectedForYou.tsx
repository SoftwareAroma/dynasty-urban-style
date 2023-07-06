import React from 'react';
import { ProductCard } from '@components/widgets';
import { ProductFour, ProductOne } from '@assets/static/images';
import Link from 'next/link';

type Props = {
    title?: string;
    isButton?: boolean;
    centerTitle?: boolean;
}

const SelectedForYou = (props: Props) => {
    const { title, isButton, centerTitle } = props;
    return (
        <React.Fragment>
            <div className="flex flex-col mt-6 py-16">
                {
                    !isButton && centerTitle ? 
                    <div className="flex flex-row justify-center items-center py-4 mb-8 px-8">
                        <h1 className='text-gray-700 text-lg md:text-2xl lg:text-4xl capitalize'>
                            {title ?? "Selected just for you"}
                        </h1>
                    </div> 
                :
                    <div className="flex flex-row justify-between items-center py-4 mb-8 px-8">
                        <h1 className='text-gray-700 text-lg md:text-2xl lg:text-4xl capitalize'>
                            {title ?? "Selected just for you"}
                        </h1>
                        { 
                            isButton && 
                                <Link href='/products'>
                                    <a className='bg-transparent px-4 py-2 border border-gray-500 rounded-full capitalize hover:border-none hover:bg-gray-900 hover:text-gray-50 transition-all duration-300 delay-100'>
                                        show more
                                    </a>
                                </Link>
                        }
                    </div>
                }
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-8">
                    <ProductCard
                        image={ProductOne}
                        price={118.00}
                        isDiscount={true}
                        discount="-20%"
                        title="Product One"
                        brand="Nike"
                        rating={4}
                    />
                    <ProductCard 
                        image={ProductFour}
                        price={158.00}
                        title="Product Two"
                        brand="Luis Vuitton"
                    />
                    <ProductCard 
                        image={ProductOne}
                        price={158.00}
                        title="Product Three"
                        brand="Nike"
                    />
                    <ProductCard 
                        image={ProductOne}
                        price={158.00}
                        title="Product Three"
                        brand="Balanciaga"
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default SelectedForYou;
