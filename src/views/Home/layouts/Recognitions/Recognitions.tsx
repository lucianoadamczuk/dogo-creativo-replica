import { useTranslation } from 'react-i18next';

import styles from './Recognitions.module.css';
import Text from '../../../../components/Text/Text';
export default function Recognitions() {
	const { t } = useTranslation('home', { keyPrefix: 'recognitions' });
	const content = {
		title: t('title'),
		images: [
			{ src: '/images/home/recognitions/aguila.svg', alt: 'Aguila' },
			{ src: '/images/home/recognitions/apple.svg', alt: 'Apple' },
			{ src: '/images/home/recognitions/arpa.svg', alt: 'Arpa' },
			{ src: '/images/home/recognitions/awwwards.svg', alt: 'W. Awwwards' },
			{ src: '/images/home/recognitions/cannes.svg', alt: 'Cannes Lions' },
			{
				src: '/images/home/recognitions/colombia.svg',
				alt: 'Colombia en linea Award',
			},
			{
				src: '/images/home/recognitions/fb.svg',
				alt: 'Facebook World Hack Buenos Aires Winner',
			},
			{
				src: '/images/home/recognitions/googleplay.svg',
				alt: 'Google Play Developers',
			},
			{
				src: '/images/home/recognitions/manhattan.svg',
				alt: 'Manhattan Program Award',
			},
			{ src: '/images/home/recognitions/mobile.svg', alt: 'Mobile Life Award' },
			{ src: '/images/home/recognitions/sepa.svg', alt: 'Sepa Award' },
			{ src: '/images/home/recognitions/yahoo.svg', alt: 'Yahoo Finance' },
			{
				src: '/images/home/recognitions/yt.svg',
				alt: 'YouTube Ads Leaderboard',
			},
		],
		paragraph: t('paragraph'),
	};

	return (
		<section className={styles.section}>
			<div>
				<Text Tag='h3' size='title'>
					{' '}
					{content.title}{' '}
				</Text>
				<Text Tag='p'> {content.paragraph} </Text>
			</div>

			<div className={styles.imagesContainer}>
				{content.images.map((img) => (
					<img
						key={img.src}
						src={img.src}
						alt={img.alt}
						className={styles.image}
					/>
				))}
			</div>
		</section>
	);
}
