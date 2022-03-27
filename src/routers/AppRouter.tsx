import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/Dashboard';
import NotFoundPage from '../pages/NotFound';
// import { Redirect, Switch, useLocation } from 'react-router-dom';

export default function AppRouter() {
	return (
		<Routes>
			<Route path="/app" element={<DashboardPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}
