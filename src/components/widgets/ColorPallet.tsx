import React from 'react';

const ColorPallet = () => {
    return (
        <React.Fragment>
            <div className="border border-gray-300 px-4 py-2 flex flex-col justify-start items-start space-y-2">
                <div className="w-full flex flex-row justify-between items-center space-x-2">
                    <p className="text-gray-700">Color</p>
                    <button className="text-gray-700">
                        +
                    </button>
                </div>
                <div className="w-full flex flex-row justify-center items-center space-x-1">
                    <button className='border border-gray-400'>
                        <div className="w-4 h-4 m-1 bg-black"></div>
                    </button>
                    <button className='border border-gray-400'>
                        <div className="w-4 h-4 m-1 bg-dim-yellow"></div>
                    </button>
                    <button className='border border-gray-400'>
                        <div className="w-4 h-4 m-1 bg-l-blue"></div>
                    </button>
                    <button className='border border-gray-400'>
                        <div className="w-4 h-4 m-1 bg-k-grey"></div>
                    </button>
                    <button className='border border-gray-400'>
                        <div className="w-4 h-4 m-1 bg-white border border-gray-200"></div>
                    </button>
                    <button className='border border-gray-400'>
                        <div className="w-4 h-4 m-1 bg-c-blue"></div>
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ColorPallet;
