import { FC } from 'react';
import Text from '../Base/Text';
import styled from 'styled-components';

const List: FC = () => {
	return (
		<Container>
			<li>
				<Text
					type='p'
					size='landing'
					weight='bold'>
					flo does not (yet) exist
				</Text>
			</li>
		</Container>
	);
};

const Container = styled.ul`
	list-style: none;
`;

export default List;
