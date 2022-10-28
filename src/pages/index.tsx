import React from 'react';
import {MainLayout} from "@components/common/layout";

const Home = () => {
  return (
    <React.Fragment>
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="container">
                <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
                    <div className="text-center">
                        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                            Dynasty Urban <span className="text-indigo-600">Style</span>
                        </h2>
                        <h3 className='text-xl md:text-3xl mt-10'>Coming Soon</h3>
                        <p className="text-md md:text-xl mt-10"><a className="hover:underline" href="https://www.dynastyurbanstyle.com">Dynasty Urban Style</a> is a place where all your fashion needs are satisfied at affordable and convenient ways.</p>
                    </div>
                    <div className="flex flex-wrap mt-10 justify-center">
                        <div className="m-3">
                            <a href="https://www.facebook.com/software_aroma" title="dynasty urban style On Facebook"
                                className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-gray-900 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                <span className="mx-auto">Facebook</span>
                            </a>
                        </div>
                        <div className="m-3">
                            <a href="https://twitter.com/software_aroma" title="dynasty urban style On Twitter"
                                className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-500 hover:border-blue-500 hover:bg-gray-900 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                <span className="mx-auto">Twitter</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
}

// Home.Layout = MainLayout;

export default Home
