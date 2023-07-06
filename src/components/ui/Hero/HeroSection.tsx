import React from 'react';
import Image from 'next/image';
import { 
    ArrowLeftWhite, 
    ArrowRightBlack, 
    DeliveryTruck, 
    GuaranteeShield, 
    HappyFace
} from '@assets/static/icons';
import HeroBottomItem from './HeroBottomItem';
import { SwiperSlider } from '@components/common/widgets';
import SlideIndicator from './SlideIndicator';
import { ArrowRight } from '@components/icons';
import { useRouter } from 'next/router';

const HeroSection = () => {
    const [slideNumber, setSlideNumber] = React.useState(0);
    const router = useRouter();

    return (
        <React.Fragment>
            <div className="h-auto lg:h-[650px] w-screen">
                <div className="relative h-full w-full">
                    <div className='absolute left-5 top-20 md:top-24 lg:top-28 z-10'>
                        <SlideIndicator 
                            slideNumber={slideNumber}
                        />
                    </div>
                    <div className='absolute left-12 h-full flex flex-col justify-center items-center z-10'>
                        <div className="pl-20 mb-24 flex flex-col justify-center items-start space-y-6">
                            <h1 className='capitalize text-gray-100 font-bold text-lg md:text-2xl lg:text-8xl'>
                                The <br /> summer <br /> sale
                            </h1>
                            <div onClick={() => { router.push('/products') }} className="flex flex-row items-center space-x-8 text-gray-100 font-bold cursor-pointer">
                                <a className='bg-gold bg-opacity-70 p-4 rounded-full shadow-md'>
                                    <ArrowRight 
                                        className='w-6 h-6 text-white'
                                    />
                                </a>
                                <p>
                                    shop now
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-transparent w-full h-full">
                        <SwiperSlider 
                            slideNumber={slideNumber}
                            setSlideNumber={setSlideNumber}
                        />
                    </div>
                    <div className='hidden absolute z-10 bottom-0 w-full h-auto lg:h-[131px] md:flex flex-row justify-between items-center'>
                        <div className="bg-gray-50 lg:mb-6 xl:mb-8 flex flex-row justify-center w-full mr-4 lg:mr-0 ld:w-5/6 md:rounded-tr-[100px] py-4 xl:py-6 space-x-8 lg:space-x-20">
                            <HeroBottomItem
                                src={DeliveryTruck}
                                alt="delivery truck"
                                title="Free Shipping"
                                description="On orders over $199"
                            />
                            <HeroBottomItem 
                                src={HappyFace}
                                alt="happy face"
                                title="99% Satisfied Customers"
                                description="Our clients' opinions speak for themselves"
                            />
                            <HeroBottomItem 
                                src={GuaranteeShield}
                                alt="originality guarantee"
                                title="originality Guaranteed"
                                description="30 days warranty for each product from our store"
                            />
                        </div>
                        <div className="hidden lg:flex w-1/6 flex-wrap flex-row justify-center items-center space-x-4">
                            <div className='bg-white hover:shadow-lg bg-opacity-10 backdrop-filter backdrop-blur-lg cursor-pointer px-4 py-2'
                                >
                                <Image 
                                    src={ArrowLeftWhite}
                                    alt="arrow left"
                                />
                            </div>
                            <div className='bg-white hover:shadow-lg cursor-pointer flex justify-center items-center px-4 py-3'
                                >
                                <Image 
                                    src={ArrowRightBlack}
                                    alt="arrow left"
                                />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    );
};

export default HeroSection;