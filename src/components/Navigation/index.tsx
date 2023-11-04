'use client';
import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import Text from '../Base/Text';
import theme from '../../../theme';

const Navigation: FC = () => {
	const pathname = usePathname();
	const isActive = {
		music: pathname.includes('/music'),
		visuals: pathname.includes('/visuals'),
		dailies: pathname.includes('/dailies'),
	};

	return (
		<Container>
			<Link href='/'>
				<Logo>
					<Text
						type='p'
						size='s'>
						flo.fyi
					</Text>
					{/* <Text
						type='p'
						size='s'>
						music & visuals
					</Text> */}
				</Logo>
			</Link>

			<List>
				<ListItem isActive={isActive.music}>
					<Link href='/music'>
						<Text
							type='p'
							size='s'>
							MUSIC
						</Text>
					</Link>
				</ListItem>
				<ListItem isActive={isActive.visuals}>
					<Link href='/visuals'>
						<Text
							type='p'
							size='s'>
							VISUALS
						</Text>
					</Link>
				</ListItem>
			</List>
			<List>
				<ListItem isActive={isActive.dailies}>
					<Link href='/dailies'>
						<Text
							type='p'
							size='s'>
							DAILIES
						</Text>
					</Link>
				</ListItem>
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

const ListItem = styled.li<{ isActive: boolean }>`
	position: relative;

	&::after {
		content: '';
		position: absolute;
		bottom: -0.75rem;
		left: 50%;
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
		background-color: ${({ isActive }) =>
			isActive ? theme.colors.red : 'transparent'};
		transition: background-color 0.2s ease-in-out;
	}
`;

const Logo = styled.div`
	display: flex;
	gap: 2rem;
`;

export default Navigation;
