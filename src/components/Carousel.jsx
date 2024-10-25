import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {
  return (
    <div>
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://cdn.shopify.com/s/files/1/0722/8106/3702/files/phantom-desktop-launched.webp?v=1726917473'/></SwiperSlide>
        <SwiperSlide><img src='https://cdn.shopify.com/s/files/1/0722/8106/3702/files/Elite-Shop-Now-Desktop-Banner.webp?v=1729060444'/></SwiperSlide>
        <SwiperSlide><img src='https://cdn.shopify.com/s/files/1/0722/8106/3702/files/Z811-Desktop-Web-Banner.webp?v=1729254787'/></SwiperSlide>
        <SwiperSlide><img src='https://cdn.shopify.com/s/files/1/0722/8106/3702/files/Wave-Pro-Live-Now-Desktop-Web-Banner.webp?v=1729173326'/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel
