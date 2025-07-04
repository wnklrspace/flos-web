'use client';
import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import Text from '../Base/Text';
import theme from '../../../theme';
import Hide from '../Hide';

const Navigation: FC = () => {
	const pathname = usePathname();
	const isActive = {
		music: pathname.includes('/music'),
		visuals: pathname.includes('/visuals'),
		dailies: pathname.includes('/dailies'),
		words: pathname.includes('/words'),
	};

	return (
		<Container>
			<Link href='/'>
				<Logo>
					<Text
						type='p'
						size='s'>
						f
						<Hide>
							<Text
								type='span'
								size='s'>
								lo.
							</Text>
						</Hide>
						f
						<Hide>
							<Text
								type='span'
								size='s'>
								yi
							</Text>
						</Hide>
					</Text>
				</Logo>
			</Link>

			{/* <List>
				<ListItem isActive={isActive.words}>
					<Link href='/words'>
						<Text
							type='p'
							size='s'>
							WORDS
						</Text>
					</Link>
				</ListItem>
				<ListItem isActive={isActive.dailies}>
					<Link href='/dailies'>
						<Text
							type='p'
							size='s'>
							DAILIES
						</Text>
					</Link>
				</ListItem>
			</List> */}
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
