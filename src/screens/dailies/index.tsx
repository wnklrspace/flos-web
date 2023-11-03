'use client';
import styled from 'styled-components';
import { dailies } from '@/content/dailies';
import theme from '../../../theme';
import Feed from '@/components/Feed';

const Dailies = () => {
	return (
		<Container>
			<Inner>
				<Feed dailies={dailies} />
			</Inner>
		</Container>
	);
};

const Container = styled.main`
	padding: 5rem 0 0;

	${theme.breakpoints.m} {
		padding: 4rem 0 0;
	}
`;

const Inner = styled.div`
	margin: 0 auto;
	padding: 2rem 1rem;

	${theme.breakpoints.m} {
		padding: 4rem 2rem;
	}

	${theme.breakpoints.l} {
		padding: 6rem 4rem;
	}
`;

export default Dailies;
