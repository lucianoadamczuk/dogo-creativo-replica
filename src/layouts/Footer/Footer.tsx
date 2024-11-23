import { useTranslation } from 'react-i18next';
import Phrase from './components/Phrase/Phrase';
import styles from './Footer.module.css';

export default function Footer() {
	const { t } = useTranslation('footer');
	const content = {
		paragraph_1: t('paragraph_1'),
		paragraph_2: t('paragraph_2'),
		paragraph_3: t('paragraph_3'),
		links: t('links', { returnObjects: true }),
		copyright: t('copyright'),
	};

	return (
		<footer className={styles.footer}>
			<section className={styles.contentContainer}>
				<div className={styles.textContainer}>
					<Phrase />
					<img src='/images/logo.svg' alt='logo' className={styles.logo} />
					<p className={styles.small}> {content.paragraph_1} </p>
					<p>{content.paragraph_2}</p>
					<p>{content.paragraph_3}a</p>
				</div>

				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9518889323817!2d-74.0090645!3d40.7190756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1fd5b70e2b%3A0x545bd4b67a345dba!2s99%20Hudson%20St%2C%20New%20York%2C%20NY%2010013%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1732142229852!5m2!1ses-419!2sar'
					style={{ border: 0 }}
					allowFullScreen
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
					className={styles.map}
				></iframe>
			</section>

			<section className={styles.contact}>
				{Object.values(content.links).map((link) => (
					<a key={link} className={styles.link}>
						{link}
					</a>
				))}
			</section>

			<div className={styles.copyright}>{content.copyright}</div>
		</footer>
	);
}
