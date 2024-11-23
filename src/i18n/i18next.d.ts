// import the original type declarations
import 'i18next';
// import all namespaces (for the default language, only)
import navbar from '../../public/locales/en/navbar.json';
import home from '../../public/locales/en/home.json';
import footer from '../../public/locales/en/footer.json';
import hireMe from '../../public/locales/en/hireMe.json';
import metadata from '../../public/locales/en/metadata.json';
import notFound from '../../public/locales/en/notFound.json';
import shared from '../../public/locales/en/shared.json';
import solutions from '../../public/locales/en/solutions.json';

declare module 'i18next' {
	// Extend CustomTypeOptions
	interface CustomTypeOptions {
		resources: {
			navbar: typeof navbar;
			home: typeof home;
			footer: typeof footer;
			hireMe: typeof hireMe;
			metadata: typeof metadata;
			notFound: typeof notFound;
			shared: typeof shared;
			solutions: typeof solutions;
		};
	}
}
