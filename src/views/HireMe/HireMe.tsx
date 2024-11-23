import { useTranslation } from 'react-i18next';
import styles from './HireMe.module.css';
export default function HireMe() {
	const phone = '+54 9 11 5337 6931';
	const whatsappURL = `https://wa.me/${phone.replace(/[\s+]/g, '')}`;
	const { t } = useTranslation('hireMe');
	const content = {
		title: t('title'),
		website: 'Website',
		phone: 'Phone',
	};

	return (
		<section className={styles.section}>
			<h1 className={styles.title}>
				{content.title}
				<span className={styles.highlighted}> Luciano Adamczuk</span>
			</h1>

			<div className={styles.contactContainer}>
				<a href='https://lucianoadamczuk.netlify.app' target='_blank'>
					{content.website}
				</a>

				<a href='https://github.com/lucianoadamczuk' target='_blank'>
					Github
				</a>

				<a href={whatsappURL} target='_blank'>
					{content.phone}
				</a>
			</div>
		</section>
	);
}
