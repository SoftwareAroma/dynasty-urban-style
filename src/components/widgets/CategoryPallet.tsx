import React from 'react'
import CheckBox from './CheckBox';

type Props = {
    categories:{
            id: string,
            name: string,
            label: string,
            quantity: number,
            active: boolean
        }[],
    handleCategoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CategoryPallet = (props: Props) => {
    const {categories, handleCategoryChange} = props;
    return (
        <div>
            <div className="border border-gray-300 px-4 py-2 flex flex-col justify-start items-start space-y-2">
                <div className="w-full flex flex-row justify-between items-center space-x-2">
                    <p className="text-gray-700">Category</p>
                    <button className="text-gray-700">
                        +
                    </button>
                </div>
                <div className="flex flex-col">
                    {
                        categories.map((category) => {
                            return (
                                <CheckBox
                                    key={category.id}
                                    id={category.id}
                                    name={category.name}
                                    label={category.label}
                                    quantity={category.quantity}
                                    active={category.active}
                                    onChange={handleCategoryChange}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CategoryPallet
