import { ProductFour, ProductOne } from '@assets/static/images';
import { MainLayout } from '@components/common/layout';
import { ProductCard } from '@components/widgets';
import React from 'react';

const Products = () => {
    return (
        <React.Fragment>
            <div className="px-12">
                <div className="pt-24"></div>
                <div className="grid grid-cols-4 gap-4">
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

Products.Layout = MainLayout;

export default Products;

