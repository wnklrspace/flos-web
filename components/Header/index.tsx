'use client';
import { FC } from 'react';
import styled from 'styled-components';

import Navigation from '../Navigation';
import theme from '../../theme';

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
	top: 1rem;
	left: 1rem;
	right: 1rem;
	z-index: 100;
	background-color: rgba(255, 255, 255, 0.8);
	backdrop-filter: blur(2rem);
	-webkit-backdrop-filter: blur(2rem);
	border-radius: 10rem;
	overflow: hidden;

	${theme.breakpoints.m} {
		top: 0;
		left: 0;
		width: 100%;
		background-color: rgba(228, 228, 231, 0.4);
	}
`;

export default Header;
