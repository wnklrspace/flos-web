'use client';
import { FC } from 'react';
import { dailies } from '@/content/dailies';
import Layout from '@/components/Base/Layout';
import Feed from '@/components/Feed';

const DailiesScreen: FC = () => {
	return (
		<Layout>
			<Feed dailies={dailies} />
		</Layout>
	);
};

export default DailiesScreen;
