import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { HeroImageOne, HeroImageTwo, HeroImageThree } from '@assets/static/images';
import { Autoplay, Scrollbar } from "swiper";

type SwiperSliderProps = {
    slideNumber?: number;
    setSlideNumber: React.Dispatch<React.SetStateAction<number>>;
}

// list of images
export const images = [
    {
        src: HeroImageOne,
        alt: 'hero image one'
    },
    {
        src: HeroImageTwo,
        alt: 'hero image two'
    },
    {
        src: HeroImageThree,
        alt: 'hero image three'
    },
]

const SwiperSlider = (props: SwiperSliderProps) => {
    const { 
        setSlideNumber,
    } = props;

    // get the current active image index
    const onSlideChange = (swiper: any) => {
        // console.log('slide change', swiper.realIndex);
        setSlideNumber(swiper.realIndex);
    }

    return (
        <React.Fragment>
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: true,
                }}
                navigation={false}
                modules={[Scrollbar, Autoplay]}
                className="mySwiper"
                slidesPerView={1}
                onSlideChange={onSlideChange}
                onSwiper={(swiper) => {
                    console.log('swiper ', swiper);
                }}
                >
                    {
                        images.map((image, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        layout="fill"
                                        className='h-full w-full'
                                    />
                                </SwiperSlide>
                            );
                        })
                    }
            </Swiper>
        </React.Fragment>
    );
}

export default SwiperSlider;
