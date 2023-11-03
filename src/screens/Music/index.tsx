'use client';
import Link from 'next/link';
import styled from 'styled-components';
import Text from '@/components/Base/Text';
import theme from '../../../theme';

const Music = () => {
	return (
		<Container>
			<Inner>
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
			</Inner>
		</Container>
	);
};

const Container = styled.main`
	padding: 4rem 0 0;
`;

const Inner = styled.div`
	margin: 0 auto;
	padding: 2rem 1rem;

	${theme.breakpoints.m} {
		padding: 2rem;
	}

	${theme.breakpoints.l} {
		padding: 2rem 4rem;
	}
`;

export default Music;
