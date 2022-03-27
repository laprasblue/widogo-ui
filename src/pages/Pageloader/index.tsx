import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './styles.less';
const PageLoader = () => {
	const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

	return (
		<div className="loader">
			<Spin indicator={antIcon} />
		</div>
	);
};
export default PageLoader;
