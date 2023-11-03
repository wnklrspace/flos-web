import { FC } from 'react';
import styled from 'styled-components';
import Song from './Song';
import theme from '../../../theme';

const Player: FC = () => {
	return (
		<Grid>
			<Song title='the beginning (skit)' />
			<Song title='boy' />
			<Song title='home' />
			<Song title='oasis of tranquility (skit)' />
			<Song title='fall' />
			<Song title='running' />
			<Song title='the middle (skit)' />
			<Song title='dialog' />
			<Song title='3.14' />
			<Song title='fortress' />
			<Song title='can (not) keep up' />
			<Song title='a (skit)' />
			<Song title='void' />
			<Song title='the end (skit)' />
		</Grid>
	);
};

const Grid = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;

	${theme.breakpoints.m} {
		gap: 2rem;
	}
`;

export default Player;
