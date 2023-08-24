import { FC } from 'react';
import Text from '../Base/Text';
import styled from 'styled-components';

const Events: FC = () => {
	return (
		<Container>
			<li>
				<Text
					type='p'
					size='xl'>
					Live
				</Text>
			</li>
			<li>
				<Text
					type='p'
					size='xl'>
					12.12.2023
				</Text>
			</li>
		</Container>
	);
};

const Container = styled.ul`
	list-style: none;
`;

export default Events;
