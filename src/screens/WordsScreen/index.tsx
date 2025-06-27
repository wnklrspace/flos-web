'use client';
import { FC, useState } from 'react';
import styled from 'styled-components';
import Layout from '@/components/Base/Layout';
import Text from '@/components/Base/Text';
import theme from '../../../theme';

const WordsScreen: FC = () => {
	const [isActive, setIsActive] = useState<boolean>(false);

	return (
		<Layout>
			<Grid>
				<WordsComponent $isActive={isActive}>
					<Text
						type='h3'
						size='xxl'>
						Weil wir uns nicht kennen, aber schön, dass es uns beiden so geht
					</Text>
					<Text
						type='h3'
						size='s'>
						{new Date().toLocaleDateString()}
					</Text>
					<StyledButton onClick={() => setIsActive(!isActive)}></StyledButton>
				</WordsComponent>
				<WordsComponent>
					<Text
						type='h3'
						size='xxl'>
						Ein schöner neuer Text
					</Text>
					<StyledButton></StyledButton>
				</WordsComponent>
			</Grid>
		</Layout>
	);
};

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(60rem, 1fr));
	grid-gap: 2rem;
`;

const StyledButton = styled.button`
	align-self: flex-end;
	background-color: ${theme.colors.black};
	padding: 1rem;
	height: 6rem;
	width: 6rem;
	border-radius: 50%;
	outline: none;
	border: none;
`;

const WordsComponent = styled.div<{
	$isActive?: boolean;
}>`
	position: ${({ $isActive }) => ($isActive ? 'fixed' : 'relative')};
	background-color: ${theme.colors.white};
	padding: 2rem;
	transform: translate(0, 0);
	transition: transform 0.4s ease-in-out;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 4rem;

	${({ $isActive }) =>
		$isActive &&
		`
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 80%;
		max-width: 60rem;
		height: 80%;
		max-height: 40rem;
		overflow: hidden;
	`}
`;

export default WordsScreen;
