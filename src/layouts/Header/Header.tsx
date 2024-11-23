import Button from '../../components/Button/Button';
import styles from './Header.module.css';

interface Props {
	title: string;
	paragraph?: string;
	btn?: string;
	image: string;
	alt: string;
	onClick?: () => void;
}
export default function Header({
	title,
	paragraph,
	btn,
	image,
	alt,
	onClick,
}: Props) {
	return (
		<header className={styles.header}>
			<section className={styles.contentContainer}>
				<h1 className={styles.title}> {title} </h1>
				{paragraph && <p className={styles.paragraph}> {paragraph} </p>}

				{btn && <Button color='filled' text={btn} onClick={onClick} />}
			</section>

			<img src={image} alt={alt} className={styles.image} />
		</header>
	);
}
