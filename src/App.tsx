import { Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './i18n/i18next';
import { Footer, Nav } from './layouts';
import Loading from './layouts/Loading/Loading';
import HireMe from './views/HireMe/HireMe';
import Home from './views/Home/Home';
import NotFound from './views/NotFound/NotFound';
import Solutions from './views/solutions/Solutions';

const AppRoutes = () => {
	const { pathname } = useLocation();
	const routes = ['/', '/solutions'];
	const showNavAndFooter = routes.includes(pathname);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'instant' });
	}, [pathname]);

	return (
		<>
			{showNavAndFooter && <Nav />}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/solutions' element={<Solutions />} />
				<Route path='hire-me' element={<HireMe />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			{showNavAndFooter && <Footer />}
		</>
	);
};

function App() {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<BrowserRouter>
					<AppRoutes />
				</BrowserRouter>
			</Suspense>
		</>
	);
}

export default App;
