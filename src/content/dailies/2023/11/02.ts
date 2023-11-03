import { DAILY_TYPE, Daily } from '../../../../../types/dailies';
import { MEDIA_TYPE } from '../../../../../types/media';

const Content: Daily = {
	type: DAILY_TYPE.IMAGE,
	title: 'November 2, 2023',
	description: '10 shades of soft feelings.',
	media: {
		type: MEDIA_TYPE.IMAGE,
		url: '/dailies/2023/11/02.png',
		alt: 'Feeling alone while feeling stupid.',
		width: 2000,
		height: 2000,
	},
};

export default Content;
