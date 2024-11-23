import { useTranslation } from 'react-i18next';
import { Header } from '../../../layouts';
import { useNavigate } from 'react-router-dom';

export default function HeaderHome() {
	const { t } = useTranslation('home', { keyPrefix: 'header' });
	const content = {
		title: t('title'),
		paragraph: t('paragraph'),
		btn: t('btn'),
		image: '/images/home/header.png',
		alt: t('alt'),
	};

	const navigate = useNavigate();

	return (
		<Header
			title={content.title}
			paragraph={content.paragraph}
			btn={content.btn}
			image={content.image}
			alt={content.alt}
			onClick={() => navigate('/solutions')}
		/>
	);
}
