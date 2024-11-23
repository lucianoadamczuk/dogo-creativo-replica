// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

import styles from "./CarouselBrands.module.css";

interface Props {
  display: string[];
}
export default function CarouselBrands({ display }: Props) {
  return (
    <>
      <Swiper
        slidesPerView={3.6}
        spaceBetween={20}
        speed={3000}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 4.6,
          },
          768: {
            slidesPerView: 6.6,
          },
          1024: {
            slidesPerView: 8.6,
          },
        }}
        modules={[Autoplay]}
        className={styles.carousel}
      >
        {display.map((i) => (
          <SwiperSlide key={i}>
            <img src={i} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
