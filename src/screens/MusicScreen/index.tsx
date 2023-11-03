'use client';
import { FC } from 'react';
import Link from 'next/link';
import Text from '@/components/Base/Text';
import Layout from '@/components/Base/Layout';

const MusicScreen: FC = () => {
	return (
		<Layout>
			<Text
				type='h1'
				size='l'>
				music does not (yet) exist. flo does partly exist within{' '}
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

export default MusicScreen;
