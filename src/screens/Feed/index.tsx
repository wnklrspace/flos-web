'use client';
import { DAILY_TYPE, Daily } from '../../../types/dailies';
import { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Text from "@/components/Base/Text";
import { dailies } from "../../../content/dailies";

const Feed: FC = () => {
	return (
		<Container>
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
					case DAILY_TYPE.AUDIO:
						return (
							<div key={daily.title + index}>
								<audio controls>
									<source
										src={daily.file}
										type='audio/mp3'
									/>
									Your browser does not support the audio element.
								</audio>
								<Text
									type='p'
									size='l'>
									Title: {daily.text} <br />
								</Text>
								<Text
									type='h2'
									size='l'>
									{daily.title}
								</Text>
							</div>
						);
					case DAILY_TYPE.TEXT:
						return (
							<div>
								<div
									style={{
										fontFamily: 'IBM Plex Mono, monospace',
										backgroundColor: '#fff',
										padding: '2rem',
										borderRadius: '1rem',
										marginBottom: '1rem',
										display: 'flex',
										flexDirection: 'column',
										gap: '1rem',
									}}>
									{daily.text.map((sentence, index) => {
										return (
											<Text
												key={sentence + index}
												type='p'
												size='l'
												family='mono'>
												{sentence}
											</Text>
										);
									})}
								</div>
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
	padding: 4rem;

	display: grid;
	grid-template-columns: repeat(3, minmax(20rem, 1fr));
	gap: 4rem;
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
