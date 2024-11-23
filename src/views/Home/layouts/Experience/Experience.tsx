import { useTranslation } from 'react-i18next';

import CarouselBrands from './Components/CarouselBrands';
import styles from './Experience.module.css';
import Text from '../../../../components/Text/Text';
import Button from '../../../../components/Button/Button';
export default function Experience() {
	const { t } = useTranslation('home', { keyPrefix: 'experience' });
	const content = {
		title: t('title'),
		carousel: [
			'/images/home/brands/adn.svg',
			'/images/home/brands/army.svg',
			'/images/home/brands/bacata.svg',
			'/images/home/brands/microsoft.svg',
			'/images/home/brands/olimpicos.svg',
			'/images/home/brands/oscars.svg',
			'/images/home/brands/pantene.svg',
			'/images/home/brands/paris.svg',
			'/images/home/brands/redlobster.svg',
			'/images/home/brands/scholas.svg',
			'/images/home/brands/sony.svg',
			'/images/home/brands/taylorswift.svg',
			'/images/home/brands/trumpsoho.svg',
			'/images/home/brands/universal.svg',
		],
		paragraph: t('paragraph'),
		btn: t('btn'),
	};
	return (
		<section className={styles.section}>
			<div>
				<Text Tag='h3' size='title'>
					{content.title}
				</Text>
				<Text Tag='p'> {content.paragraph} </Text>
			</div>
			<CarouselBrands display={content.carousel} />
			<Button text={content.btn} />
		</section>
	);
}
