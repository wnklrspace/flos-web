'use client';
import styled from 'styled-components';
import Events from '../../../components/Events';
import Player from '../../../components/Player';
import theme from '../../../theme';

const Music = () => {
	return (
		<Container>
			<Inner>
				{/* <SongList /> */}
				<Player />
				<Events />
			</Inner>
		</Container>
	);
};

const Container = styled.main`
	padding: 4rem 0 0;
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

export default Music;
