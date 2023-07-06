import React from 'react';
import SizeButton from './SizeButton';

const SizePallet = () => {
    return (
        <React.Fragment>
            <div className="border border-gray-300 px-4 py-2 flex flex-col justify-start items-start space-y-2">
                <div className="w-full flex flex-row justify-between items-center space-x-2">
                    <p className="text-gray-700">Size</p>
                    <button className="text-gray-700">
                        +
                    </button>
                </div>
                <div className="w-full flex flex-row justify-center items-center">
                    <SizeButton 
                        size="XS"
                    />
                    <SizeButton 
                        size="S"
                    />
                    <SizeButton 
                        size="M"
                    />
                    <SizeButton 
                        size="L"
                    />
                    <SizeButton 
                        size="XL"
                    />
                    <SizeButton 
                        size="XXL"
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default SizePallet;
