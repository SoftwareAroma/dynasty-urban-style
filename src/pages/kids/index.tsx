import { ProductFive, ProductFour, ProductOne, ProductSeven } from '@assets/static/images';
import { MainLayout } from '@components/common/layout';
import { HomeIcon } from '@components/icons';
import SubscribeSection from '@components/ui/SubscribeSection';
import { CategoryPallet, ColorPallet, PagingIndicator, PricePallet, ProductCard, SizeButton, SizePallet } from '@components/widgets';
import React from 'react';

const initialCategories = [
    {
        id: 'tshirt',
        name: 'tshirt',
        label: 'T-Shirt',
        quantity: 10,
        active: false
    },
    {
        id: 'sweatshirts',
        name: 'sweatshirts',
        label: 'Sweatshirts',
        quantity: 13,
        active: false
    },
    {
        id: 'tanktops',
        name: 'tanktops',
        label: 'Tank Tops',
        quantity: 23,
        active: false
    },
    {
        id: 'dressshirt',
        name: 'dressshirt',
        label: 'Dress Shirt',
        quantity: 14,
        active: false
    },
]


const KidsCategory = () => {

    const [categories, setCategories] = React.useState(initialCategories);

    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = e.target;
        const newCategories = categories.map((category) => {
            if (category.name === name) {
                return {
                    ...category,
                    active: !category.active
                }
            }else{
                return {
                    ...category,
                    active: false,
                }
            }
        })
        setCategories(newCategories);
    }

    return (
        <React.Fragment>
            <div className="py-10"></div>
            <div className="px-12 py-8">
                <div className="flex flex-row justify-start items-center space-x-3 mb-4">
                    <HomeIcon className="text-gray-200" />
                    <p className="text-gray-200 ">/</p>
                    <p className="text-gray-200 capitalize">Kid&apos;s Products</p>
                </div>
                <div className="grid grid-cols-6 gap-2">
                    {/* side bar */}
                    <div className="col-span-1 w-full">
                        <div className="space-y-4">
                            <CategoryPallet
                                categories={categories}
                                handleCategoryChange={handleCategoryChange}
                            />
                            <PricePallet />
                            <SizePallet />
                            <ColorPallet />
                        </div>
                    </div>
                    {/* products */}
                    <div className="col-span-5 w-full px-6">
                        <div className="flex flex-row justify-between items-center">
                            <div className="">
                                <h1 className="space-x-2 font-semibold">
                                    <span>Men&apos;s Top</span>
                                    <span className="text-gray-400">
                                        <span>(</span>
                                        <span>133</span>
                                        <span>)</span>
                                    </span>
                                </h1>
                            </div>
                            <div className="flex flex-row justify-center items-center space-x-4">
                                <div className="flex flex-row justify-start items-center space-x-2">
                                    <p className="font-bold text-gray-700">show products:</p>
                                    <div className="outline-none focus:outline-none border border-gray-400 rounded-full px-2 py-1">
                                        <select className='outline-none focus:outline-none px-2' >
                                            <option className='uppercase' value="1">30</option>
                                            <option className='uppercase' value="2">40</option>
                                            <option className='uppercase' value="3">50</option>
                                            <option className='uppercase' value="4">60</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-start items-center space-x-2">
                                    <p className="font-bold text-gray-700">sort:</p>
                                    <div className="outline-none focus:outline-none border border-gray-400 rounded-full px-2 py-1">
                                        <select className='outline-none focus:outline-none px-2 uppercase' >
                                            <option className='uppercase' value="1">Popular</option>
                                            <option className='uppercase' value="2">Featured</option>
                                            <option className='uppercase' value="3">Best Selling</option>
                                            <option className='uppercase' value="4">A-Z</option>
                                            <option className='uppercase' value="5">Price</option>
                                            <option className='uppercase' value="6">Date</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-8">
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
                                image={ProductFive}
                                price={158.00}
                                title="Product Two"
                                brand="Luis Vuitton"
                            />
                            <ProductCard
                                image={ProductSeven}
                                price={158.00}
                                title="Product Three"
                                brand="Nike"
                            />
                            <ProductCard 
                                image={ProductSeven}
                                price={158.00}
                                title="Product Three"
                                brand="Balanciaga"
                            />
                            <ProductCard 
                                image={ProductSeven}
                                price={158.00}
                                title="Product Three"
                                brand="Balanciaga"
                            />
                            <ProductCard 
                                image={ProductSeven}
                                price={158.00}
                                title="Product Three"
                                brand="Balanciaga"
                            />
                        </div>
                        {/* page indication */}
                        <div className="w-full flex flex-row justify-between items-center space-x-2 mt-8">
                            <div className="flex flex-row justify-center items-center space-x-2">
                                
                            </div>
                            <div className="flex flex-row justify-center items-center space-x-4">
                                <p className="text-gray-600">
                                    Page
                                </p>
                                <PagingIndicator 
                                    number={1}
                                    active={true}
                                    onClick={() => {}}
                                />
                                <PagingIndicator 
                                    number={2}
                                    active={false}
                                    onClick={() => {}}
                                />
                                <PagingIndicator 
                                    number={3}
                                    active={false}
                                    onClick={() => {}}
                                />
                            </div>
                            <div className="flex flex-row justify-center items-center space-x-2">
                                <button className="text-black underline">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
            <SubscribeSection />
        </React.Fragment>
    );
}

KidsCategory.Layout = MainLayout

export default KidsCategory;
