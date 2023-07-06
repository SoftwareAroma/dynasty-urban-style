import React from 'react';

const SubscribeSection = () => {
    return (
        <React.Fragment>
            <div className="flex flex-col justify-center items-center  w-full h-56 bg-subscribe-bg bg-no-repeat bg-cover">
                <div className="flex flex-row space-x-8 justify-center items-center h-full w-full bg-black bg-opacity-20 px-12 py-8">
                    <div className="">
                        <h2 className="text-lg md:text-2xl lg:text-3xl capitalize font-bold text-white">
                            Subscribe to our newsletter
                        </h2>
                        <h2 className="text-lg md:text-2xl lg:text-3xl capitalize font-bold text-white">
                            and receive amazing offers weekly
                        </h2>
                    </div>
                    <div className="flex flex-row space-x-4">
                        <input 
                            type="text"
                            placeholder="Enter your email"
                            className="w-80 outline-none focus:outline-none h-12 px-6 text-gray-700 rounded-full text-sm md:text-base lg:text-lg"
                        />
                        <button className='bg-gold bg-opacity-70 hover:bg-opacity-100 rounded-full px-6 text-white font-bold md:text-lg lg:text-xl capitalize tracking-wider'>
                            subscribe
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SubscribeSection;
