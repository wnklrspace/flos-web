import { MEDIA_TYPE } from '../../../../types/media';
import { DAILY_TYPE, Daily } from '../../../../types/dailies';

const WeirdConnection: Daily = {
	type: DAILY_TYPE.IMAGE,
	title: 'November 22 something, 2023',
	description: 'Weird Connection - 20 something',
	media: {
		type: MEDIA_TYPE.IMAGE,
		url: '/dailies/2023/11/22.jpeg',
		alt: 'Screenshot of the spotify player with the song "20 something" from EV playing',
		width: 1125,
		height: 462,
	},
};

export default WeirdConnection;
