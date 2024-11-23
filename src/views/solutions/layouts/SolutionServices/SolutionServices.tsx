import styles from './SolutionServices.module.css';

export default function SolutionServices() {
	const content = [
		{
			title: 'Influencer Strategy',
			paragraph:
				'Our artists make up the largest Spanish-speaking audience, with more than 26 million people interacting.',
			items: [
				'Conceptualization',
				'Virality',
				'Brand and Influencer matching',
				'Generation of opinions and reactions',
				'Statistics',
				'Press and promotion',
			],
		},
		{
			title: 'Political Marketing',
			paragraph:
				'We are educated and prepared for peace, and not prepared at all for what we face in the real world.',
			items: [
				'Strategy',
				'Surveys',
				'Governments, Political Parties',
				'Presidents',
				'Governors, Mayors',
				'Senators and Representatives',
			],
		},
		{
			title: 'APPs (iOS & Android)',
			paragraph:
				'After a decade, a paradigm shift begins in online communication and in the use of artificial intelligence.',
			items: [
				'Top App Developers in Miami, Florida',
				'Social Media Integration',
				'Geolocation',
				'Push Messages',
				'In-apps',
				'Interactive games',
				'E-commerce (Amazon, Shopify, Etc)',
				'Events, maps, and more',
			],
		},
		{
			title: 'Editorial Design',
			paragraph:
				'The creative concept is one of the most important aspects in the marketing and success of publishing your book.',
			items: [
				'Professional cover design (eBook & Print)',
				'High resolution JPG and print-ready PDF',
				'Professional printing layout',
				'Back-cover and spine design',
				'Conceptualization',
				'3D rendering of books for social media',
			],
		},
		{
			title: 'Branded Content',
			paragraph:
				'The importance of generating content that responds to stories that are experiences and new forms of connection.',
			items: [
				'Special and interactive projects',
				'Animation and immersive videos',
				'Gamification, virtual reality',
				'360 Strategies',
				'Influencers and political marketing',
				'Drone',
			],
		},
		{
			title: 'Social Media Strategy',
			paragraph:
				'We create clear strategies that take into account your goals, your customers and what your competition is doing.',
			items: [
				'Brand generation in social media',
				'Advertising',
				'Content Development',
				'Community management',
				'Metrics and data analysis',
				'Strategic plan',
			],
		},
		{
			title: 'Metaverse Development',
			paragraph:
				'We help companies to create and operate their new virtual spaces, where they can extend the presence, proposals and creativity of their brand.',
			items: [
				'Blockchain Development Companies',
				'Block Art by Dogo Creativo: A unique and exclusive NFT of digital art.',
				'NFT (Non Fungible Token)',
				'Brand Wearables',
				'Digital Spaces',
				'Blockchain',
				'Brandverse',
				'Web 3.0',
			],
		},
		{
			title: 'Branding & Graphic Design',
			paragraph:
				"We don't look at just one aspect of a brand. We consider the whole experience. How a brand Looks, Speaks, Behaves, Feels, and Dreams. Measuring brand awareness.",
			items: [
				'Dogo Creativo is in the #Top10 Brand Agencies in New York!',
				'Logos and Iconography',
				'Brand manual',
				'Brand Look & Feel',
				'Product packaging and design',
				'Advertising and creativity',
				'Books, covers and magazines',
			],
		},
	];

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
