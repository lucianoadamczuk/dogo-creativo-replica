import { useInView } from 'react-intersection-observer';
import styles from './Button.module.css';

interface Props {
	text: string;
	color?: 'light' | 'primary' | 'filled';
	onClick?: () => void;
}
export default function Button({ text, color = 'primary', onClick }: Props) {
	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});
	return (
		<button
			ref={ref}
			onClick={onClick}
			className={`${styles.button} ${styles[color]} ${inView && styles.buttonEntry}`}
		>
			{text}
		</button>
	);
}
