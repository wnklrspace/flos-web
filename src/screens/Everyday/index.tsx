'use client';
import styled from 'styled-components';
import List from '../../../components/List';
import theme from '../../../theme';

const Everyday = () => {
	return (
		<Container>
			<Inner>
				<List />
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
	padding: 0 1rem;

	${theme.breakpoints.m} {
		padding: 0 2rem;
	}

	${theme.breakpoints.l} {
		padding: 0 4rem;
	}
`;

export default Everyday;
