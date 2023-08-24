'use client';
import styled from 'styled-components';

import Events from '../../../components/Events';
import SongList from '../../../components/List/SongList';
import Player from '../../../components/Player';

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
	padding: 0 4rem;
	margin: 0 auto;
`;

export default Music;
