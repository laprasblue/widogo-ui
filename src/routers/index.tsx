import { Layout } from 'antd';
import React from 'react';
import AppRouter from './AppRouter';
import AuthRouter from './AuthRouter';
import CommonRouter from './CommonRouter';

export default function Router() {
	const isLoggedIn = localStorage.getItem('isLoggedIn');
	return (
		<Layout>
			<CommonRouter />
			{isLoggedIn === 'true' ? <AppRouter /> : <AuthRouter />}
		</Layout>
	);
}
