import { CSSProperties, ReactNode } from 'react';
import styles from './Text.module.css';
interface Props {
	Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small';
	size?: 'title-big' | 'title' | 'subtitle' | 'base' | 'small';
	color?: 'dark' | 'muted' | 'light';
	children: ReactNode;
}

export default function Text({
	Tag,
	size = 'base',
	color = 'dark',
	children,
}: Props) {
	const style: CSSProperties = {
		color: `var(--color-${color})`,
		fontSize: `var(--size-${size})`,
	};

	return (
		<Tag className={styles.animation} style={style}>
			{children}
		</Tag>
	);
}
