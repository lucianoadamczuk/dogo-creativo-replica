import styles from './LanguageSwitcher.module.css';

import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
	const languages = [
		{
			values: 'es',
			label: 'Español',
		},
		{
			values: 'en',
			label: 'English',
		},
		{
			values: 'de',
			label: 'Deutsch',
		},
		{
			values: 'ms',
			label: 'Bahasa Melayu',
		},
	];

	const { i18n } = useTranslation();

	return (
		<select
			className={styles.select}
			value={i18n.language}
			onChange={(e) => {
				const value = (e.target as HTMLSelectElement)?.value;
				if (value) {
					i18n.changeLanguage(value);
				}
			}}
		>
			{languages.map((lang) => (
				<option key={`languageSwitcher-${lang.values}`} value={lang.values}>
					{lang.label}
				</option>
			))}
		</select>
	);
}
