import React from 'react';
import MainDropdownMenu from "@components/common/Header/DropDownMenu";
import Link from "next/link";
import {useAppSelector} from "@provider";
import {useDispatch} from "react-redux";
import {toggleTheme} from "@provider/features/reducers/ThemeReducer";

const MainHeader = () => {
    const theme = useAppSelector(state => state.theme.theme);

    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <div className="header px-4 py-2 md:px-8 md:py-4">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex">
                        <Link href='/'>
                            <a href="" className="">
                                Logo
                            </a>
                        </Link>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="flex justify-center items-center space-x-5">
                            <li className="capitalize">
                                <Link href="/">
                                    <a className="capitalize">
                                        Men
                                    </a>
                                </Link>
                            </li>
                            <li className="capitalize">
                                <Link href="/">
                                    <a className="capitalize">
                                        Women
                                    </a>
                                </Link>
                            </li>
                            <li className="capitalize">
                                <Link href="/">
                                    <a className="capitalize">
                                        Kids
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="mr-auto flex justify-center items-center space-x-5">
                            <li className="">

                            </li>
                            <li className="">
                                <Link href='/cart'>
                                    <a className="capitalize">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>
                                    </a>
                                </Link>
                            </li>
                            <li className="">
                                <Link href='/login'>
                                    <a className="capitalize">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                    </a>
                                </Link>
                            </li>
                            <div onClick={() => dispatch(toggleTheme())} className="cursor-pointer">
                                {
                                    theme ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 border border-gray-900 rounded-full p-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                        </svg>
                                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 border border-gray-900 rounded-full p-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                        </svg>
                                }
                            </div>
                        </ul>
                    </div>
                    <div className="hamburger block lg:hidden">
                        <MainDropdownMenu />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MainHeader;