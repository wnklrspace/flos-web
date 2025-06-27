import { FC } from 'react';
import styled from 'styled-components';

interface Props {
	children: React.ReactNode;
	hide?: boolean;
}

const Hide: FC<Props> = ({ children, hide = true }) => {
	return <Container hide={hide}>{children}</Container>;
};

const Container = styled.span<{
	hide: boolean;
}>`
	${({ hide }) => hide && 'opacity: 0;'}
`;

export default Hide;
