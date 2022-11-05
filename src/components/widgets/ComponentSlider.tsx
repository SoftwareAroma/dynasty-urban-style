import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

type Props = {
    components: JSX.Element[];
    autoPlay?: boolean;
}

const ComponentSlider = (props: Props) => {
    return (
        <React.Fragment>
        <Swiper
            navigation={true}
            slidesPerView={4}
            spaceBetween={30}
            modules={[Navigation]} 
            className="mySwiper"
        >
            {
                props.components.map((component, index) => {
                    return (
                        <SwiperSlide key={index}>
                            {component}
                        </SwiperSlide>
                    );
                })
            }
        </Swiper>
        </React.Fragment>
    );
}

export default ComponentSlider;
