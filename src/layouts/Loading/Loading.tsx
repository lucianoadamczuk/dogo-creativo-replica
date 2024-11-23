import styles from './Loading.module.css';

export default function Loading() {
	return (
		<section className={styles.loading}>
			<img src='/images/logo-min.svg' alt='logo' className={styles.logo} />
		</section>
	);
}
