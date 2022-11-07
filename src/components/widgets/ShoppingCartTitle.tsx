import React from 'react';

const ShoppingCartTitle = () => {
    return (
        <React.Fragment>
            <div className="grid grid-cols-7 w-full text-gray-300 font-semibold mt-8">
                <p className="col-span-2">
                    Product
                </p>
                <p className="col-span-1">
                    Color
                </p>
                <p className="col-span-1">
                    Size
                </p>
                <p className="col-span-1">
                    Quantity
                </p>
                <p className="col-span-1">
                    Price
                </p>
            </div>
        </React.Fragment>
    )
}

export default ShoppingCartTitle
