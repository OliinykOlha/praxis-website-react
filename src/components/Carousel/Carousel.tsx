import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { CarouselImages } from "./data";
import { SliderImg } from "./styles";


const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
    >
      {CarouselImages.map((item) => (
        <SwiperSlide key={item.id}>
          <SliderImg src={item.src} alt={item.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;