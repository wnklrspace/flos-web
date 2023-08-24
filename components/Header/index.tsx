'use client';
import { FC } from 'react';
import styled from 'styled-components';

import Navigation from '../Navigation';

interface Props {}

const Header: FC<Props> = () => {
	return (
		<Container>
			<Navigation />
		</Container>
	);
};

const Container = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: rgba(228, 228, 231, 0.4);
	backdrop-filter: blur(2rem);
	-webkit-backdrop-filter: blur(2rem);
`;

export default Header;
