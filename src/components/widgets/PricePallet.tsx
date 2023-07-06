import React from 'react'

const PricePallet = () => {
    return (
        <React.Fragment>
            <div className="border border-gray-300 px-4 py-2 flex flex-col justify-start items-start space-y-2">
                <div className="w-full flex flex-row justify-between items-center space-x-2">
                    <p className="text-gray-700">Price</p>
                    <button className="text-gray-700">
                        +
                    </button>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                    <div className="bg-gray-100 text-gray-700 font-semibold px-2 py-1">
                        <p className="">0 GHS</p>
                    </div>
                    <div className="bg-gray-100 text-gray-700 font-semibold px-2 py-1">
                        <p className="">500 GHS</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <div className="border border-black rounded-full p-2 w-[2px] h-[2px]"></div>
                    <div className="w-full bg-black h-[2px]"></div>
                    <div className="border border-black rounded-full p-2 w-[2px] h-[2px]"></div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default PricePallet
