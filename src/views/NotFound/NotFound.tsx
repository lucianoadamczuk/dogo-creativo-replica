import styles from './NotFound.module.css';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';

export default function NotFound() {
	const { t } = useTranslation('notFound');
	const content = {
		title: t('title'),
		paragraph: t('paragraph'),
		btn: t('btn'),
	};

	const navigate = useNavigate();
	return (
		<section className={styles.section}>
			<Text Tag='h1' size='title-big'>
				{content.title}
			</Text>
			<Text Tag='p'> {content.paragraph} </Text>

			<Button text={content.btn} onClick={() => navigate('/')} />
		</section>
	);
}
