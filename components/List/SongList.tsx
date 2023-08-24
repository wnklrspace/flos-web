import { FC } from 'react';
import Text from '../Base/Text';
import styled from 'styled-components';

const SongList: FC = () => {
	return (
		<Container>
			<li>
				<Text
					type='p'
					size='landing'
					weight='bold'>
					boy
				</Text>
			</li>
			<li>
				<Text
					type='p'
					size='landing'
					weight='bold'>
					home
				</Text>
			</li>
			<li>
				<Text
					type='p'
					size='landing'
					weight='bold'>
					fall
				</Text>
			</li>
			<li>
				<Text
					type='p'
					size='landing'
					weight='bold'>
					running
				</Text>
			</li>
			<li>
				<Text
					type='p'
					size='landing'
					weight='bold'>
					3.14
				</Text>
			</li>
			<li>
				<Text
					type='p'
					size='landing'
					weight='bold'>
					fortress
				</Text>
			</li>
			<li>
				<Text
					type='p'
					size='landing'
					weight='bold'>
					(can't) keep up
				</Text>
			</li>
			<li>
				<Text
					type='p'
					size='landing'
					weight='bold'>
					void
				</Text>
			</li>
		</Container>
	);
};

const Container = styled.ul`
	list-style: none;
`;

export default SongList;
