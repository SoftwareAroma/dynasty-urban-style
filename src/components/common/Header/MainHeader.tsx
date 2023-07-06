import React from 'react';
import BrandLogo from '@components/common/widgets/BrandLogo';
import MenuItem from './MenuItem';
import { Cart, Menu, Person, Search } from '@components/icons';
import IconMenuItem from './IconMenuItem';
import { menu } from './menu/menu';

const MainHeader = () => {
    return (
        <React.Fragment>
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg fixed z-50 w-full px-2 py-2 lg:px-8 lg:py-2">
                <div className="flex flex-row justify-between items-center">
                    <BrandLogo />
                    <div className="hidden lg:block">
                        <ul className="flex justify-center items-center space-x-14">
                            {
                                menu.map((item, index) => (
                                    <MenuItem key={index} title={item.title} url={item.url} />
                                ))
                            }
                        </ul>
                    </div>
                    {/* hamburger and mobile menu */}
                    <div className='block lg:hidden cursor-pointer'>
                        <Menu 
                            onClick={() => console.log('clicked')}
                        />
                    </div>

                    {/* desktop view menu */}
                    <div className="hidden lg:block">
                        <ul className="mr-auto flex justify-center items-center space-x-5">
                            <IconMenuItem
                                icon={
                                    <Search
                                        className='w-6 h-6 text-gray-900 hover:opacity-70' 
                                    />
                                }
                                onClick={() => console.log('clicked')}
                            />
                            <IconMenuItem
                                url='/cart'
                                icon={
                                    <Cart 
                                        className='w-6 h-6 text-gray-900 hover:opacity-70'
                                    />
                                }
                            />
                            <IconMenuItem
                                url='/auth'
                                icon={
                                    <Person 
                                        className='w-6 h-6 text-gray-900 hover:opacity-70'
                                    />
                                }
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MainHeader;