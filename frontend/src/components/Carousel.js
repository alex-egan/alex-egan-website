import * as React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import 'swiper/css';

SwiperCore.use([Navigation]);

export default function Carousel() {
    <div>
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>Hey</SwiperSlide>
            <SwiperSlide>My</SwiperSlide>
            <SwiperSlide>Name</SwiperSlide>
            <SwiperSlide>Alex</SwiperSlide>
        </Swiper>
    </div>
}