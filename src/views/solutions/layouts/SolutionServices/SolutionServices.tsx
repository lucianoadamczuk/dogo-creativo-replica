import { useTranslation } from 'react-i18next';
import styles from './SolutionServices.module.css';

export default function SolutionServices() {
	const { t } = useTranslation('solutions');
	const content = t('solutions_services', { returnObjects: true });
	console.log(content);
	return (
		<section className={styles.section}>
			{content.map((serv) => (
				<article key={serv.title} className={styles.article}>
					<div>
						<h3 className={styles.title}> {serv.title} </h3>
						<p className={styles.paragraph}> {serv.paragraph} </p>
					</div>

					<ul>
						{serv.items.map((i) => (
							<li key={i}> {i} </li>
						))}
					</ul>
				</article>
			))}
		</section>
	);
}
