'use client';
import styled from 'styled-components';

import List from '../../../components/List';

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
	padding: 4rem 0 0;
`;

const Inner = styled.div`
	padding: 0 4rem;
	margin: 0 auto;
`;

export default Everyday;
