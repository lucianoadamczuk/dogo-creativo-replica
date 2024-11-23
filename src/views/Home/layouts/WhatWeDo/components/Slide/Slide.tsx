import styles from './Slide.module.css';

interface Props {
	item: {
		src: string;
		alt: string;
		title: string;
		paragraph: string;
		items: string[];
	};
}
export default function Slide({ item }: Props) {
	return (
		<article className={styles.slide}>
			<img src={item.src} alt={item.alt} className={styles.image} />
			<div>
				<h4 className={styles.title}> {item.title} </h4>
				<p className={styles.paragraph}> {item.paragraph} </p>

				<ul className={styles.list}>
					{item?.items.map((i) => <li key={i}> {i} </li>)}
				</ul>
			</div>
		</article>
	);
}
