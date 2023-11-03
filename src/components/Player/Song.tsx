import { FC } from 'react';
import styled from 'styled-components';
import Text from '../Base/Text';
import theme from '../../../theme';

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
	height: 100vw;
	width: 100vw;
	background-color: #b9b9bf;
	border-radius: 1.5rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	${theme.breakpoints.m} {
		height: calc(100vw / 2 - 3rem);
		width: calc(100vw / 2 - 3rem);
	}

	${theme.breakpoints.l} {
		height: calc(100vw / 3 - 4rem);
		width: calc(100vw / 3 - 4rem);
	}
`;

export default Song;
