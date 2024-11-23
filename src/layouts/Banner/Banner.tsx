import styles from './Banner.module.css';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import Button from '../../components/Button/Button';
export default function Banner() {
	const { t } = useTranslation('shared', { keyPrefix: 'banner' });
	const content = {
		title: t('title'),
		btn: t('btn'),
	};

	const imageRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		if (window.innerWidth < 1024) return;

		const handleMouseMove = (event: MouseEvent) => {
			if (imageRef.current) {
				const { clientX, clientY } = event;
				const { innerWidth, innerHeight } = window;

				// Calculate movement in the opposite direction
				const offsetX = ((clientX - innerWidth / 2) / innerWidth) * -50; // Adjust multiplier for sensitivity
				const offsetY = ((clientY - innerHeight / 2) / innerHeight) * -50;

				// Apply transform to the image
				imageRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
			}
		};

		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	return (
		<div className={styles.banner}>
			<div className={styles.contentContainer}>
				<h4
					ref={ref}
					className={`${styles.title} ${inView && styles.animateTitle}`}
				>
					{content.title}
				</h4>
				<Button color='light' text={content.btn} />
			</div>
			<img
				src='/images/world-map.svg'
				alt=''
				className={styles.image}
				ref={imageRef}
			/>
		</div>
	);
}
