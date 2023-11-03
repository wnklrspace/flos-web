'use client';
import { FC } from 'react';
import styled from 'styled-components';
import Header from '@/components/Header';
import theme from '../../../../theme';

interface Props {
	children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			<main>
				<Container>
					<Inner>{children}</Inner>
				</Container>
			</main>
		</>
	);
};

const Container = styled.main`
	padding: 5rem 0 0;

	${theme.breakpoints.m} {
		padding: 4rem 0 0;
	}
`;

const Inner = styled.div`
	margin: 0 auto;
	padding: 2rem 1rem;

	${theme.breakpoints.m} {
		padding: 4rem 2rem;
	}

	${theme.breakpoints.l} {
		padding: 4rem 4rem;
	}
`;

export default Layout;
