'use client';
import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Text from '../Base/Text';
import theme from '../../theme';

interface Props {}

const Navigation: FC<Props> = () => {
	return (
		<Container>
			<Link href='/'>
				<Logo>
					<Text
						type='p'
						size='s'>
						flo
					</Text>
					<Text
						type='p'
						size='s'>
						music & visuals
					</Text>
				</Logo>
			</Link>
			<List>
				<li>
					<Link href='/music'>
						<Text
							type='p'
							size='s'>
							MUSIC
						</Text>
					</Link>
				</li>
				<li>
					<Link href='/visuals'>
						<Text
							type='p'
							size='s'>
							VISUALS
						</Text>
					</Link>
				</li>
			</List>
			<List>
				<li>
					<Link href='/dailys'>
						<Text
							type='p'
							size='s'>
							DAILYS
						</Text>
					</Link>
				</li>
			</List>
		</Container>
	);
};

const Container = styled.nav`
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 2rem;

	${theme.breakpoints.m} {
		padding: 0 2rem;
	}

	${theme.breakpoints.l} {
		padding: 0 4rem;
	}
`;

const List = styled.ul`
	list-style: none;
	display: flex;
	gap: 2rem;
`;

const Logo = styled.div`
	display: flex;
	gap: 2rem;
`;

export default Navigation;
