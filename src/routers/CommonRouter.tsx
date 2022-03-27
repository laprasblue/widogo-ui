import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from '../pages/About';
import PageLoader from '../pages/Pageloader';

const Login = lazy(() => import('../pages/Login/index'));
const NotFound = lazy(() => import('../pages/NotFound'));

export default function CommonRouter() {
	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				<Route path="/about" element={<AboutPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Suspense>
	);
}
