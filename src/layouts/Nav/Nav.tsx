import { Spin as Hamburger } from 'hamburger-react';

import { useNavigate } from 'react-router-dom';
import styles from './Nav.module.css';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import { useState } from 'react';

export default function Nav() {
	const { t } = useTranslation('navbar');
	const content = {
		routes: t('routes', { returnObjects: true }),
	};

	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();
	function handleNavigation(url: string) {
		setIsOpen(!isOpen);
		if (!document.startViewTransition) {
			navigate(url);
		} else {
			document.startViewTransition(() => {
				navigate(url);
			});
		}
	}
	return (
		<nav className={styles.nav}>
			<img src='/images/logo.svg' alt='' className={styles.logo} />

			<div
				className={styles.linksContainer}
				style={{ left: isOpen ? 0 : '100vw', opacity: isOpen ? 1 : 0 }}
			>
				{Object.values(content.routes).map((l, index) => (
					<a
						key={l + index}
						href={''}
						onClick={(e) => {
							e.preventDefault();
							handleNavigation(l.path);
						}}
						className={`${styles.link} ${Object.values(content.routes).length - 1 === index && styles.lastLink}`}
					>
						{l.name}
					</a>
				))}
				<LanguageSwitcher />
			</div>

			<div className={styles.menu}>
				<Hamburger
					duration={0.5}
					color='var(--color-light)'
					toggled={isOpen}
					onToggle={() => setIsOpen(!isOpen)}
				/>
			</div>
		</nav>
	);
}
