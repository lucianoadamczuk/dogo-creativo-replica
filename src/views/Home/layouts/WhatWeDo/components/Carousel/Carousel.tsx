// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './Carousel.module.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Slide from '../Slide/Slide';

interface Props {
	className: string;
	display: {
		src: string;
		alt: string;
		title: string;
		paragraph: string;
		items: string[];
	}[];
}
export default function CarouselWhatWeDo({ className, display }: Props) {
	return (
		<>
			<Swiper
				slidesPerView={1.2}
				spaceBetween={5}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					768: {
						slidesPerView: 1.8,
					},
				}}
				modules={[Pagination]}
				className={`${styles.carousel} ${className}`}
			>
				{display.map((item) => (
					<SwiperSlide key={item.title}>
						<Slide item={item} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
