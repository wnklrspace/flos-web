import { FC } from 'react';
import styled from 'styled-components';
import Text from '../Base/Text';

interface Props {
	title: string;
}

const Song: FC<Props> = ({ title }) => {
	return (
		<Container>
			<Text
				type='h3'
				size='l'>
				{title}
			</Text>
		</Container>
	);
};

const Container = styled.div`
	height: calc(100vw / 3 - 6rem);
	width: calc(100vw / 3 - 4rem);
	background-color: #b9b9bf;
	border-radius: 1.5rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export default Song;
