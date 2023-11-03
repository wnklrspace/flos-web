'use client';
import { FC } from 'react';
import Link from 'next/link';
import Layout from '@/components/Base/Layout';
import Text from '@/components/Base/Text';

const VisualsScreen: FC = () => {
	return (
		<Layout>
			<Text
				type='h1'
				size='l'>
				visuals do not (yet) exist. flo does partly exist within{' '}
				<Link href='/dailies'>
					<Text
						type='span'
						size='l'
						underline
						hasHoverEffect>
						dailies
					</Text>
				</Link>
				.
			</Text>
		</Layout>
	);
};

export default VisualsScreen;
