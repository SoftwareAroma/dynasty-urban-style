import { images } from '@components/common/widgets/SwiperSlider';
import React from 'react';

type Props = {
    slideNumber: number;
}

const SlideIndicator = (props: Props) => {
    const { slideNumber } = props;
    return (
        <React.Fragment>
            <div className="flex flex-col justify-center items-center space-y-2">
                <p className='hidden md:block text-gray-100'>
                    {`0${slideNumber + 1}`}
                </p>
                <div className="bg-gray-300 rounded-lg bg-opacity-30 backdrop-filter backdrop-blur-lg  space-y-2 flex flex-col justify-center items-center h-full">
                    <div className={
                            slideNumber == 0 ? 'h-8 lg:h-20 w-1 rounded-lg bg-white transition-all duration-300 delay-150' :
                            'h-8 lg:h-20 w-1 rounded-lg bg-transparent transition-all duration-300 delay-150'
                        }></div> 
                    <div className={
                            slideNumber == 1 ? 'h-8 lg:h-20 w-1 rounded-lg bg-white transition-all duration-300 delay-150' :
                            'h-8 lg:h-20 w-1 rounded-lg bg-transparent transition-all duration-300 delay-150'
                        }></div> 
                    <div className={
                            slideNumber == 2 ? 'h-8 lg:h-20 w-1 rounded-lg bg-white transition-all duration-300 delay-150' :
                            'h-8 lg:h-20 w-1 rounded-lg bg-transparent transition-all duration-300 delay-150'
                        }></div>
                </div>
                <p className='hidden md:block text-gray-100'>
                    {`0${images.length}`}
                </p>
            </div>
        </React.Fragment>
    );
}

export default SlideIndicator;
