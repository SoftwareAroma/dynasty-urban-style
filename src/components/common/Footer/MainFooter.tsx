import { FaceBook, InstaGram, LinkedIn, Twitter } from '@components/icons';
import Link from 'next/link';
import React from 'react';
import { BrandLogo } from '../widgets';

const MainFooter = () => {

    const [year, _] = React.useState<number>(new Date().getFullYear());

    return (
        <React.Fragment>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <div className="bg-black py-4">
                            <BrandLogo 
                                width={150}
                                height={90}
                            />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                            Air plant banjo lyft occupy retro adaptogen indego
                        </p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                            </li>
                            </nav>
                        </div>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                            </li>
                            </nav>
                        </div>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                                CATEGORIES
                            </h2>
                            <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                            </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">
                            &copy; {year} Dynasty Urban Style —
                            <Link href="https://twitter.com/SoftwareAroma" rel="noopener noreferrer" passHref>
                                <a target="_blank" rel="noopener noreferrer" 
                                    className="text-gray-600 ml-1">
                                    @dynastyurbanstyle
                                </a>
                            </Link>
                        </p>
                        <span className="inline-flex space-x-4 sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <Link href='https://web.facebook.com/musah.ibrahim.3958/' rel="noopener noreferrer" passHref>
                                <a target="_blank" className="text-gray-500">
                                    <FaceBook
                                        className="w-6 h-6 hover:text-kblue"
                                    />
                                </a>
                            </Link>
                            <Link href='https://twitter.com/SoftwareAroma' rel="noopener noreferrer" passHref>
                                <a target="_blank" className="text-gray-500">
                                    <Twitter
                                        className="w-6 h-6 hover:text-kblue"
                                    />
                                </a>
                            </Link>
                            <Link href='https://www.instagram.com/musahibrahimali' rel="noopener noreferrer" passHref>
                                <a target="_blank" className="text-gray-500">
                                    <InstaGram
                                        className="w-6 h-6 hover:text-kblue"
                                    />
                                </a>
                            </Link>
                            <Link href='https://www.linkedin.com/in/musah-ibrahim-ali-820600ab/' rel="noopener noreferrer" passHref>
                                <a className="text-gray-500">
                                    <LinkedIn
                                        className="w-6 h-6 hover:text-kblue"
                                    />
                                </a>
                            </Link>
                        </span>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default MainFooter;