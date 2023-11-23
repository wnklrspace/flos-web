import { DAILY_TYPE, Daily } from '../../../../types/dailies';
import { MEDIA_TYPE } from '../../../../types/media';

const LikedMessages: Daily = {
	type: DAILY_TYPE.IMAGE,
	title: 'November 24, 2023',
	description:
		'Rare sight of two likeable, popular messages standing very close to one another at the same time.',
	media: {
		type: MEDIA_TYPE.IMAGE,
		url: '/dailies/2023/11/24.jpg',
		alt: 'Photograph of two liked messages',
		width: 640,
		height: 180,
	},
};

export default LikedMessages;
