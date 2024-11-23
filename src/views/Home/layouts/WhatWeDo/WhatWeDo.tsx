import { useTranslation } from 'react-i18next';

import styles from './WhatWeDo.module.css';
import Text from '../../../../components/Text/Text';
import Button from '../../../../components/Button/Button';
import CarouselWhatWeDo from './components/Carousel/Carousel';
export default function WhatWeDo() {
	const { t } = useTranslation('home', { keyPrefix: 'whatWeDo' });
	const content = {
		title: t('title'),
		paragraph: t('paragraph'),
		carousel: t('carousel', { returnObjects: true }),
		btn: t('btn'),
	};

	return (
		<section className={styles.section}>
			<div className={styles.contentContainer}>
				<Text Tag='h3' size='title'>
					{content.title}
				</Text>
				<Text Tag='p'> {content.paragraph} </Text>
			</div>

			<CarouselWhatWeDo
				display={Object.values(content.carousel)}
				className={styles.carousel}
			/>

			<Button text={content.btn} />
		</section>
	);
}
