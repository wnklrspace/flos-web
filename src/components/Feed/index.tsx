import { DAILY_TYPE, Daily } from '../../../types/dailies';
import { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Text from '../Base/Text';

interface Props {
	dailies: Daily[];
}

const Feed: FC<Props> = ({ dailies }) => {
	return (
		<Container>
			<Text
				type='p'
				size='m'>
				Dailies
			</Text>
			<Text
				type='p'
				size='xl'
				lineHeight={1.1}>
				This is a collection feed of random things, thoughts and ideas. I try to
				post one every day, but I do not always succeed.
			</Text>
			{dailies.map((daily, index) => {
				switch (daily.type) {
					case DAILY_TYPE.IMAGE:
						return (
							<div key={daily.title + index}>
								<ImageContainer>
									<Image
										src={daily.media.url}
										alt={daily.media.alt}
										width={daily.media.width}
										height={daily.media.height}
										layout='responsive'
									/>
								</ImageContainer>
								<Text
									type='p'
									size='l'>
									Title: {daily.description} <br />
								</Text>
								<Text
									type='h2'
									size='l'>
									{daily.title}
								</Text>
							</div>
						);
					default:
						return <>Not implemented</>;
				}
			})}
		</Container>
	);
};

const Container = styled.div`
	max-width: 60rem;
	margin: 0 auto;

	display: flex;
	flex-direction: column;
	gap: 3rem;
`;

const ImageContainer = styled.div`
	overflow: hidden;
	margin-bottom: 1rem;

	& > * {
		width: 100%;
		height: 100%;
		border-radius: 1rem;
	}
`;

export default Feed;
